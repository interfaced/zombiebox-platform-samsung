/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2013-2019, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {error, debug} from 'zb/console/console';
import IStorage from 'zb/device/interfaces/i-storage';


/**
 * @implements {IStorage}
 */
export default class Storage {
	/**
	 */
	constructor() {
		/**
		 * @type {SamsungFileSystem}
		 * @protected
		 */
		this._fs = /** @type {SamsungFileSystem} */ (new window['FileSystem']());

		/**
		 * @type {string}
		 * @protected
		 */
		this._prefix = '';

		/**
		 * @type {string}
		 * @protected
		 */
		this._fileName;

		/**
		 * @type {!Object}
		 * @protected
		 */
		this._data;

		this._loadFromFile();
	}

	/**
	 * @override
	 */
	setKeyPrefix(prefix) {
		this._prefix = prefix;
		this._migratePrefixedData(prefix);
	}

	/**
	 * @override
	 */
	getItem(key) {
		const prefixedKey = this._prefix + key;

		return prefixedKey in this._data ? this._data[prefixedKey] : null;
	}

	/**
	 * @override
	 */
	setItem(key, value) {
		this._data[this._prefix + key] = value;
		this._save();
	}

	/**
	 * @override
	 */
	removeItem(key) {
		delete this._data[this._prefix + key];
		this._save();
	}

	/**
	 * @param {IStorage} destinationStorage
	 * @param {Array<string>} prefixes
	 */
	migrate(destinationStorage, prefixes) {
		const migratedKeys = [];
		const migrateKey = (key, opt_prefix = '') => {
			const prefixedKey = opt_prefix + key;

			if (destinationStorage.getItem(key) === null) {
				destinationStorage.setItem(key, this._data[prefixedKey]);
			}

			migratedKeys.push(prefixedKey);
		};

		prefixes.forEach((prefix) => {
			this._migratePrefixedData(prefix);

			destinationStorage.setKeyPrefix(prefix);

			Object.keys((this._data))
				.filter((key) => key.startsWith(prefix))
				.forEach((key) => migrateKey(key.slice(prefix.length), prefix));
		});

		destinationStorage.setKeyPrefix('');

		Object.keys((this._data))
			.filter((key) => migratedKeys.indexOf(key) === -1)
			.forEach((key) => migrateKey(key));

		debug(`Storage: ${migratedKeys.length} keys have been migrated`);
	}

	/**
	 * @protected
	 */
	_save() {
		const exists = this._fileExists(this._fileName);
		const fp = this._fs.openCommonFile(this._fileName, exists ? 'w' : 'a');

		fp.writeAll(JSON.stringify(this._data));

		this._fs.closeCommonFile(fp);
	}

	/**
	 * Reload data from fs.
	 * @private
	 */
	_loadFromFile() {
		const dirName = this._getZbAppName();

		this._touchDir(dirName);
		this._fileName = `${dirName}/${DATA_FILE_NAME}`;
		this._data = this._readData(this._fileName);
	}

	/**
	 * Read data from fs.
	 * @param {string} fileName
	 * @return {!Object}
	 * @private
	 */
	_readData(fileName) {
		let data = {};

		if (this._fileExists(fileName)) {
			debug(`Storage: read data from ${fileName}`);

			const fp = this._fs.openCommonFile(fileName, 'r');
			const dumpedData = fp.readAll();

			if (dumpedData) {
				try {
					const parsedData = JSON.parse(dumpedData);
					if (parsedData && parsedData instanceof Object) {
						data = parsedData;
					}
				} catch (e) {
					error(`Storage: data parse error ${e}`);
				}
			}

			this._fs.closeCommonFile(fp);
		}

		return data;
	}

	/**
	 * Earlier for every prefix was created own common dir and wasn't deleted on uninstall
	 * @param {string} prefix
	 * @private
	 */
	_migratePrefixedData(prefix) {
		// Guard against empty string
		if (!prefix) {
			return;
		}

		const prefixFileName = `${prefix}/${DATA_FILE_NAME}`;
		const prefixData = this._readData(prefixFileName);
		const prefixKeys = Object.keys(prefixData);

		if (!prefixKeys.length) {
			return;
		}

		debug(`Storage: ${prefixKeys.length} keys found for prefix "${prefix}"`);

		prefixKeys.forEach((key) => {
			const prefixedKey = prefix + key;

			if (!(prefixedKey in this._data)) {
				this._data[prefixedKey] = prefixData[key];
			}
		});

		this._fs.deleteCommonFile(prefixFileName);
		this._save();
	}

	/**
	 * Create non-exists directory.
	 * @param {string} path
	 * @private
	 */
	_touchDir(path) {
		if (this._fs.isValidCommonPath(path) !== 1) {
			debug(`Storage: create common dir ${path}`);
			this._fs.createCommonDir(path);
		} else {
			debug(`Storage: common dir ${path} exists`);
		}
	}

	/**
	 * Read application name from package file 'zbapp.name'.
	 * @return {string}
	 * @private
	 */
	_getZbAppName() {
		debug(`Storage: opening file ${ZBAPP_NAME_FILE_NAME}`);
		const fp = this._fs.openFile(ZBAPP_NAME_FILE_NAME, 'r');
		debug('Storage: reading file...');

		const appName = fp.readLine();
		debug(`Storage: application name is "${appName}"`);

		return appName;
	}

	/**
	 * @param {string} path
	 * @return {boolean}
	 * @private
	 */
	_fileExists(path) {
		try {
			const fp = this._fs.openCommonFile(path, 'r');
			if (!fp) {
				return false;
			}

			this._fs.closeCommonFile(fp);
		} catch (e) {
			return false;
		}

		return true;
	}

	/**
	 * Copies values from the storage over FileSystem API to destination storage, considering given prefixes
	 * IMPORTANT: after migration final key prefix of destination storage will be reset, so don't forget to restore it
	 * @param {IStorage} destinationStorage
	 * @param {Array<string>} opt_prefixes
	 */
	static migrate(destinationStorage, opt_prefixes = []) {
		(new Storage()).migrate(destinationStorage, opt_prefixes);
	}
}


/**
 * @const {string}
 */
export const ZBAPP_NAME_FILE_NAME = 'zbapp.name';


/**
 * @const {string}
 */
export const DATA_FILE_NAME = '_storage';
