/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2013-2019, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {decodeParams} from 'zb/http/http';
import {error, debug, warn, info} from 'zb/console/console';
import AbstractDevice from 'zb/device/abstract-device';
import UnsupportedFeature from 'zb/device/errors/unsupported-feature';
import LocalStorage from 'zb/device/common/local-storage';
import Rect from 'zb/geometry/rect';
import Info from './info';
import Input from './input';
import ScreenSaverController from './screen-saver-controller';
import Storage from './storage';
import Video from './video';
import VolumeOSDController from './volume-osd-controller';


/**
 * For on/offScreenSaver need to manual add plugins to index.html.tpl:
 *      <object id="pluginObjectTVMW" classid="clsid:SAMSUNG-INFOLINK-TVMW"></object>
 *      <object id="pluginObjectNNavi" classid="clsid:SAMSUNG-INFOLINK-NNAVI"></object>
 *      Recommended style: "width:0; height:0;position: absolute;top:-10;border:0;"
 * @see getLocalTime for correct now-time using
 */
export default class Device extends AbstractDevice {
	/**
	 * @param {HTMLElement} pluginContainer
	 */
	constructor(pluginContainer) {
		super();

		/**
		 * @type {Info}
		 */
		this.info;

		/**
		 * @type {Input}
		 */
		this.input;

		/**
		 * @type {LocalStorage|Storage}
		 */
		this.storage;

		/**
		 * @type {VolumeOSDController}
		 * @protected
		 */
		this._volumeOSDController;

		/**
		 * @type {ScreenSaverController}
		 * @protected
		 */
		this._screenSaverController;

		/**
		 * @type {HTMLElement}
		 * @protected
		 */
		this._pluginContainer = pluginContainer;

		/**
		 * @type {Common.API.Plugin}
		 * @protected
		 */
		this._pluginAPI = new window['Common'].API.Plugin();

		/**
		 * @type {boolean}
		 * @protected
		 */
		this._isLastNetworkAvailable = true;

		/**
		 * @type {boolean}
		 * @protected
		 */
		this._isNetworkCheckStopped = true;

		/**
		 * @type {Object<string, HTMLObjectElement>}
		 * @private
		 */
		this._plugins = {};

		/**
		 * @type {CustomNetworkChecker}
		 * @private
		 */
		this._customNetworkChecker = null;

		/**
		 * @type {number}
		 * @private
		 */
		this._networkCheckTimeoutId = NaN;

		/**
		 * NaN - network check is stopped.
		 * @type {number}
		 * @private
		 */
		this._networkCheckIntervalTime = NaN;

		/**
		 * @type {Common.API.Widget}
		 * @private
		 */
		this._widgetAPI = new window['Common'].API.Widget();

		/**
		 * Fired with: none
		 * @const {string}
		 */
		this.EVENT_NETWORK_UNAVAILABLE = 'network-unavailable';

		/**
		 * Fired with: none
		 * @const {string}
		 */
		this.EVENT_NETWORK_AVAILABLE = 'network-available';

		this._networkCheckTick = this._networkCheckTick.bind(this);
	}

	/**
	 * @override
	 */
	init() {
		this._volumeOSDController = new VolumeOSDController(
			this._pluginAPI,
			/** @type {PluginNNAVI} */(this.getPlugin('NNAVI'))
		);

		this._screenSaverController = new ScreenSaverController(
			this._pluginAPI
		);

		this.info = new Info(
			/** @type {PluginNNAVI} */(this.getPlugin('NNAVI')),
			/** @type {PluginNetwork} */(this.getPlugin('NETWORK'))
		);

		this.input = new Input();

		this.storage = LocalStorage.isSupported() ?
			new LocalStorage() :
			new Storage();

		if (this.storage instanceof LocalStorage) {
			info(
				'Web Storage is available and will be used instead of storage over FileSystem API.',
				'If you have used old storage we recommend you migrate data by calling',
				'Storage.migrate (see method annotation for more info)'
			);
		}

		this._detectTimeDiff()
			.then((diff) => {
				if (!isNaN(diff)) {
					this._patchNativeDate(diff);
				}
			})
			.then(() => {
				this._widgetAPI.sendReadyEvent();
				this._fireEvent(this.EVENT_READY);
			});
	}

	/**
	 * @override
	 * @param {Rect} rect
	 * @return {Video}
	 */
	createVideo(rect) {
		return new Video(
			rect,
			this._screenSaverController,
			this._volumeOSDController,
			this.info.hardwareVersion(),
			/** @type {PluginPlayer} */(this.getPlugin('PLAYER')),
			/** @type {PluginAudio} */(this.getPlugin('AUDIO')),
			/** @type {PluginTV} */(this.getPlugin('TV'))
		);
	}

	/**
	 * @override
	 */
	getMAC() {
		const plugin = /** @type {PluginNetwork} */ (this.getPlugin('NETWORK'));

		const mac = plugin.GetMAC();
		const isMacHasDelimiters = mac.length === 17;

		return isMacHasDelimiters ?
			mac :
			mac.match(/.{2}/g).join(':');
	}

	/**
	 * @override
	 */
	getIP() {
		const plugin = /** @type {PluginNetwork} */ (this.getPlugin('NETWORK'));

		return plugin.GetIP(plugin.GetActiveType());
	}

	/**
	 * @override
	 */
	exit() {
		this._widgetAPI.sendReturnEvent();
	}

	/**
	 * @override
	 */
	setOSDOpacity() {
		throw new UnsupportedFeature('OSD opacity setting');
	}

	/**
	 * @override
	 */
	getOSDOpacity() {
		throw new UnsupportedFeature('OSD opacity getting');
	}

	/**
	 * @override
	 */
	setOSDChromaKey(chromaKey) {
		throw new UnsupportedFeature('OSD chroma key setting');
	}

	/**
	 * @override
	 */
	getOSDChromaKey() {
		throw new UnsupportedFeature('OSD chroma key getting');
	}

	/**
	 * @override
	 */
	removeOSDChromaKey() {
		throw new UnsupportedFeature('OSD chroma key removing');
	}

	/**
	 * @override
	 */
	hasOSDAlphaBlendingFeature() {
		return true;
	}

	/**
	 * @override
	 */
	hasOSDOpacityFeature() {
		return false;
	}

	/**
	 * @override
	 */
	hasOSDChromaKeyFeature() {
		return false;
	}

	/**
	 * @override
	 */
	isUHDSupported() {
		return this.info.model()
			.toUpperCase()
			.indexOf('UHD') !== -1;
	}

	/**
	 * @override
	 */
	getEnvironment() {
		return decodeParams(window.location.search.substring(1));
	}

	/**
	 * @override
	 */
	getLaunchParams() {
		const query = decodeParams(window.location.search.substring(1));

		if ('data' in query) {
			try {
				return /** @type {Object} */ (JSON.parse(query['data'].toString()));
			} catch (e) {
				if (e instanceof SyntaxError) {
					warn('Error parsing launch parameters: ' + e.message);
				} else {
					throw e;
				}
			}
		}

		return {};
	}

	/**
	 * Check network availability
	 * Code based on http://samsungdforum.com/Guide/tec00128/index.html
	 * @return {boolean}
	 */
	isNetworkAvailable() {
		const networkPlugin = /** @type {PluginNetwork} */ (this.getPlugin('NETWORK'));
		const currentInterface = networkPlugin.GetActiveType();

		const currentInterfaceIsActive = currentInterface !== -1;
		const physicalConnectionActive = networkPlugin.CheckPhysicalConnection(currentInterface) === 1;
		const httpConnectAvailable = networkPlugin.CheckHTTP(currentInterface) === 1;

		return currentInterfaceIsActive && physicalConnectionActive && httpConnectAvailable;
	}

	/**
	 * @param {CustomNetworkChecker} callback
	 */
	setCustomNetworkChecker(callback) {
		this._customNetworkChecker = callback;
	}

	/**
	 * @return {CustomNetworkChecker}
	 */
	getCustomNetworkChecker() {
		return this._customNetworkChecker;
	}

	/**
	 * Start background network checking
	 * @param {number=} interval Default 5000ms
	 */
	startNetworkCheck(interval) {
		this._networkCheckIntervalTime = (!isNaN(interval) && interval >= 0) ? Number(interval) : 5000;

		if (this.isNetworkCheckStopped()) {
			this._isNetworkCheckStopped = false;
			this._networkCheckTick();
		}
	}

	/**
	 * Stop background network checking
	 */
	stopNetworkCheck() {
		clearTimeout(this._networkCheckTimeoutId);
		this._networkCheckIntervalTime = NaN;
		this._networkCheckTimeoutId = NaN;
		this._isNetworkCheckStopped = true;
	}

	/**
	 * @return {boolean}
	 */
	isNetworkCheckStopped() {
		return this._isNetworkCheckStopped;
	}

	/**
	 * Exit from app to TV
	 */
	exitToTV() {
		this._widgetAPI.sendExitEvent();
	}

	/**
	 * Turn on/off screen saver.
	 * @param {boolean} turn
	 */
	enableScreensaver(turn) {
		this._screenSaverController.enableScreenSaver(turn);
	}

	/**
	 * For using this feature plugins TVMW and NNAVI must be defined statically in html
	 * @param {boolean} turn
	 */
	enableVolumeOSD(turn) {
		this._volumeOSDController.enableVolumeOSD(turn);
	}

	/**
	 * @return {boolean}
	 */
	isVolumeOSDEnabled() {
		return this._volumeOSDController.isVolumeOSDEnabled();
	}

	/**
	 * @param {string} name
	 * @return {MediaPlugin|PluginAudio|PluginNetwork|PluginNNAVI|PluginPlayer|PluginTV|PluginSEF|PluginTime|*}
	 */
	getPlugin(name) {
		if (!this._plugins.hasOwnProperty(name)) {
			const idPrefix = 'pluginObject';
			let plugin = document.getElementById(idPrefix + name);
			if (!plugin) {
				plugin = document.createElement('object');
				plugin.setAttribute('classid', `clsid:SAMSUNG-INFOLINK-${name}`);
				plugin.setAttribute('id', idPrefix + name);
				this._pluginContainer.appendChild(plugin);
			}
			this._plugins[name] = /** @type {HTMLObjectElement} */ (plugin);
		}

		return this._plugins[name];
	}

	/**
	 * @return {Common.API.Plugin}
	 */
	getPluginObject() {
		return this._pluginAPI;
	}

	/**
	 * @return {IThenable<number>}
	 * @protected
	 */
	_detectTimeDiff() {
		const logPrefix = 'Device ';
		debug(`${logPrefix}start time diff detection`);

		return new Promise((resolve) => {
			const plugin = /** @type {PluginTime} */ (this.getPlugin('TIME'));

			const lastEpochTime = plugin.GetEpochTime();
			const lastEpochCallTime = Date.now();
			const detectionStart = lastEpochCallTime;
			const detectionFailTime = 1500;

			const detectEpochChange = () => {
				const nowEpochTime = plugin.GetEpochTime();
				const nowEpochCallTime = Date.now();

				if (nowEpochCallTime - detectionStart > detectionFailTime) {
					error(`${logPrefix}time diff detection fail after ${detectionFailTime}ms`);
					resolve(NaN);

					return;
				}

				if (lastEpochTime !== nowEpochTime) {
					const middle = Math.round((nowEpochCallTime - lastEpochCallTime) / 2);
					const epochChangedAt = nowEpochCallTime - middle;
					const diff = epochChangedAt - nowEpochTime * 1000;
					debug(`${logPrefix}time diff is ${diff}ms`);
					resolve(diff);
				} else {
					setTimeout(detectEpochChange, 0);
				}
			};

			detectEpochChange();
		});
	}

	/**
	 * @param {number} patchDiff
	 * @protected
	 */
	_patchNativeDate(patchDiff) {
		const version = parseInt(this.info.hardwareVersion(), 10);
		if (version >= 2014) {
			return;
		}

		// See: http://stackoverflow.com/a/24393872
		const originalNow = window['Date'].now;
		const newNow = () => originalNow.call(Date) + patchDiff;

		const OldDate = Date;
		window['Date'] = function(a, b, c, d, e, f, g) {
			switch (arguments.length) {
				case 0:
					return new OldDate(newNow());
				case 1:
					return new OldDate(a);
				case 2:
					return new OldDate(a, b);
				case 3:
					return new OldDate(a, b, c);
				case 4:
					return new OldDate(a, b, c, d);
				case 5:
					return new OldDate(a, b, c, d, e);
				case 6:
					return new OldDate(a, b, c, d, e, f);
				default:
					return new OldDate(a, b, c, d, e, f, g);
			}
		};
		window['Date'].now = newNow;
		window['Date'].parse = OldDate.parse;
		window['Date'].UTC = OldDate.UTC;
	}

	/**
	 * @private
	 */
	_networkCheckTick() {
		this._doNetworkCheck()
			.then((isNetworkAvailable) => {
				if (this.isNetworkCheckStopped()) {
					return;
				}

				if (this._isLastNetworkAvailable !== isNetworkAvailable) {
					this._isLastNetworkAvailable = isNetworkAvailable;
					const event = isNetworkAvailable ? this.EVENT_NETWORK_AVAILABLE : this.EVENT_NETWORK_UNAVAILABLE;
					this._fireEvent(event);
				}

				this._networkCheckTimeoutId = setTimeout(this._networkCheckTick, this._networkCheckIntervalTime);
			});
	}

	/**
	 * @return {IThenable<boolean>}
	 * @private
	 */
	_doNetworkCheck() {
		return Promise
			.resolve(this.isNetworkAvailable())
			.then((isNetworkAvailable) => {
				if (!isNetworkAvailable && this._customNetworkChecker) {
					return this._customNetworkChecker();
				}

				return isNetworkAvailable;
			});
	}

	/**
	 * @return {boolean}
	 */
	static detect() {
		return navigator.userAgent.indexOf('Maple') !== -1;
	}
}


/**
 * @typedef {?function(): IThenable<boolean>}
 */
export let CustomNetworkChecker;
