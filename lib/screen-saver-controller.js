/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2013-2019, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * For on/offScreenSaver need to manual add plugins to index.html.tpl:
 *      <object id="pluginObjectTVMW" classid="clsid:SAMSUNG-INFOLINK-TVMW"></object>
 *      <object id="pluginObjectNNavi" classid="clsid:SAMSUNG-INFOLINK-NNAVI"></object>
 *      Recommended style: "width:0; height:0;position: absolute;top:-10;border:0;"
 */
export default class ScreenSaverController {
	/**
	 * @param {Common.API.Plugin} pluginAPI
	 */
	constructor(pluginAPI) {
		/**
		 * @type {Common.API.Plugin}
		 * @protected
		 */
		this._pluginAPI = pluginAPI;
	}

	/**
	 * Turn on/off screen saver.
	 * @param {boolean} turn
	 */
	enableScreenSaver(turn) {
		if (turn) {
			this._pluginAPI.setOnScreenSaver();
		} else {
			this._pluginAPI.setOffScreenSaver();
		}
	}
}
