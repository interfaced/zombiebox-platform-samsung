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
export default class Audio {
	/**
	 * @param {PluginAudio} pluginAudio
	 * @param {PluginTV} pluginTV
	 */
	constructor(pluginAudio, pluginTV) {
		/**
		 * @type {PluginAudio}
		 * @protected
		 */
		this._pluginAudio = pluginAudio;

		/**
		 * @type {PluginTV}
		 * @protected
		 */
		this._pluginTV = pluginTV;
	}

	/**
	 * @return {RESULT}
	 */
	up() {
		const {APPLY, SILENT_APPLY} = RESULT;
		const result = this._checkDevice();

		if (result === APPLY || result === SILENT_APPLY) {
			this._pluginAudio.SetVolumeWithKey(window['PL_AUDIO_VOLUME_KEY_UP']);
		}

		return result;
	}

	/**
	 * @return {RESULT}
	 */
	down() {
		const {APPLY, SILENT_APPLY} = RESULT;
		const result = this._checkDevice();

		if (result === APPLY || result === SILENT_APPLY) {
			this._pluginAudio.SetVolumeWithKey(window['PL_AUDIO_VOLUME_KEY_DOWN']);
		}

		return result;
	}

	/**
	 * @return {RESULT}
	 */
	toggleMute() {
		const {APPLY, SILENT_APPLY} = RESULT;
		const result = this._checkDevice();

		if (result === APPLY || result === SILENT_APPLY) {
			if (this.isMuted()) {
				this._pluginAudio.SetUserMute(window['PLR_FALSE']);
			} else {
				this._pluginAudio.SetUserMute(window['PLR_TRUE']);
			}
		}

		return result;
	}

	/**
	 * @return {boolean}
	 */
	isMuted() {
		return this._pluginAudio.GetUserMute() === window['PLR_TRUE'];
	}

	/**
	 * @param {boolean} val
	 * @return {boolean}
	 */
	setMuted(val) {
		return this._pluginAudio.SetUserMute(val ? window['PLR_TRUE'] : window['PLR_FALSE']) === window['PLR_TRUE'];
	}

	/**
	 * @return {number}
	 */
	getVolume() {
		return this._pluginAudio.GetVolume();
	}

	/**
	 * @return {RESULT}
	 * @protected
	 */
	_checkDevice() {
		const {IGNORED, SILENT_APPLY, APPLY} = RESULT;
		const outputDevice = this._pluginAudio.GetOutputDevice();
		const productType = this._pluginTV.GetProductType();

		if (outputDevice === window['PL_AUDIO_OUTPUT_DEVICE_EXTERNAL'] ||
			productType === window['PL_TV_PRODUCT_TYPE_BD']) {
			return IGNORED;
		}

		if (outputDevice === window['PL_AUDIO_OUTPUT_DEVICE_RECEIVER']) {
			return SILENT_APPLY;
		}

		return APPLY;
	}
}


/**
 * @enum {number}
 */
export const RESULT = {
	IGNORED: 0,
	SILENT_APPLY: 1,
	APPLY: 2
};
