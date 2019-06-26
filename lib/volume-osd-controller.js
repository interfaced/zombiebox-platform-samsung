/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2013-2019, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 */
export default class VolumeOSDController {
	/**
	 * @param {Common.API.Plugin} pluginAPI
	 * @param {PluginNNAVI} pluginNNAVI
	 */
	constructor(pluginAPI, pluginNNAVI) {
		/**
		 * @type {number}
		 * @protected
		 */
		this._volumeOSDState;

		/**
		 * @type {Common.API.Plugin}
		 * @protected
		 */
		this._pluginAPI = pluginAPI;

		/**
		 * @type {PluginNNAVI}
		 * @protected
		 */
		this._pluginNNAVI = pluginNNAVI;
	}

	/**
	 * @return {boolean}
	 */
	isVolumeOSDEnabled() {
		return this._volumeOSDState === window['PL_NNAVI_STATE_BANNER_VOL_CH'];
	}

	/**
	 * For using this feature plugins TVMW and NNAVI must be defined statically in html
	 * @param {boolean} turn
	 */
	enableVolumeOSD(turn) {
		if (turn === this.isVolumeOSDEnabled()) {
			return;
		}

		if (turn) {
			const enabler = (() => {
				this._setVolumeOSDState(window['PL_NNAVI_STATE_BANNER_VOL_CH']);
				this._getVolumeKeys().forEach(this._pluginAPI.unregistKey.bind(this._pluginAPI));
			});

			// When application first-time boots, enabling of volume osd not taken effect
			// until application is loaded and onShow hook called
			window['onShow'] = enabler;

			enabler();
		} else {
			this._setVolumeOSDState(window['PL_NNAVI_STATE_BANNER_NONE']);
			this._getVolumeKeys().forEach(this._pluginAPI.registKey.bind(this._pluginAPI));
		}
	}

	/**
	 * @return {Array<number>}
	 * @private
	 */
	_getVolumeKeys() {
		const samsungKeys = new window['Common'].API.TVKeyValue();

		return [samsungKeys.KEY_VOL_UP, samsungKeys.KEY_VOL_DOWN, samsungKeys.KEY_MUTE];
	}

	/**
	 * @param {number} state
	 * @private
	 */
	_setVolumeOSDState(state) {
		this._pluginNNAVI.SetBannerState(state);
		this._volumeOSDState = state;
	}
}
