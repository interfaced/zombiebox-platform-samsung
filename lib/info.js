/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2013-2019, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {getQueryVariable} from 'zb/http/http';
import AbstractInfo from 'zb/device/abstract-info';
import {Resolution} from 'zb/device/resolutions';


/**
 */
export default class Info extends AbstractInfo {
	/**
	 * @param {PluginNNAVI} pluginNNavi
	 * @param {PluginNetwork} pluginNetwork
	 */
	constructor(pluginNNavi, pluginNetwork) {
		super();

		/**
		 * @type {PluginNNAVI}
		 * @protected
		 */
		this._pluginNNavi = pluginNNavi;

		/**
		 * @type {PluginNetwork}
		 * @protected
		 */
		this._pluginNetwork = pluginNetwork;
	}

	/**
	 * @override
	 */
	osdResolutionType() {
		return Resolution.HD;
	}

	/**
	 * @override
	 */
	manufacturer() {
		return 'Samsung';
	}

	/**
	 * @override
	 */
	type() {
		return 'samsung';
	}

	/**
	 * @override
	 */
	serialNumber() {
		// First try to gets DUID by wired mac adr, otherwise by wireless
		// If botch ways failed returns empty value
		return (
			this._pluginNNavi.GetDUID(this._pluginNetwork.GetMAC(1)) || // eslint-disable-line new-cap
			this._pluginNNavi.GetDUID(this._pluginNetwork.GetMAC(0)) || // eslint-disable-line new-cap
			''
		);
	}

	/**
	 * @override
	 */
	softwareVersion() {
		return this._pluginNNavi.GetFirmware();
	}

	/**
	 * @override
	 */
	hardwareVersion() {
		const fw = this._pluginNNavi.GetFirmware();

		return fw.replace('T-INFOLINK', '').substr(0, 4);
	}

	/**
	 * @override
	 */
	model() {
		return this._pluginNNavi.GetModelCode();
	}

	/**
	 * @override
	 */
	version() {
		return this._pluginNNavi.GetModelCode();
	}

	/**
	 * @override
	 */
	_getLocale() {
		const locale = /** @type {?string} */ (getQueryVariable('lang'));

		return locale || '';
	}
}
