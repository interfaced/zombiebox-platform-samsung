/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2013-2019, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import AbstractInput from 'zb/device/abstract-input';
import UnsupportedFeature from 'zb/device/errors/unsupported-feature';
import Keys from 'zb/device/input/keys';


/**
 */
export default class Input extends AbstractInput {
	/**
	 * @override
	 */
	isPointingDeviceSupported() {
		return true;
	}

	/**
	 * @override
	 */
	isPointingDeviceActive() {
		return true;
	}

	/**
	 * @override
	 */
	enablePointingDevice() {
		throw new UnsupportedFeature('Pointing device enabling');
	}

	/**
	 * @override
	 */
	disablePointingDevice() {
		throw new UnsupportedFeature('Pointing device disabling');
	}

	/**
	 * @override
	 */
	_createKeysMap() {
		const samsungKeys = new window['Common'].API.TVKeyValue();
		const map = {};

		map[samsungKeys.KEY_0] = Keys.DIGIT_0;
		map[samsungKeys.KEY_1] = Keys.DIGIT_1;
		map[samsungKeys.KEY_2] = Keys.DIGIT_2;
		map[samsungKeys.KEY_3] = Keys.DIGIT_3;
		map[samsungKeys.KEY_4] = Keys.DIGIT_4;
		map[samsungKeys.KEY_5] = Keys.DIGIT_5;
		map[samsungKeys.KEY_6] = Keys.DIGIT_6;
		map[samsungKeys.KEY_7] = Keys.DIGIT_7;
		map[samsungKeys.KEY_8] = Keys.DIGIT_8;
		map[samsungKeys.KEY_9] = Keys.DIGIT_9;

		map[samsungKeys.KEY_PAUSE] = Keys.PAUSE;
		map[samsungKeys.KEY_PLAY] = Keys.PLAY;
		map[samsungKeys.KEY_STOP] = Keys.STOP;
		map[samsungKeys.KEY_RW] = Keys.REW;
		map[samsungKeys.KEY_REWIND_] = Keys.REW;
		map[samsungKeys.KEY_FF] = Keys.FWD;
		map[samsungKeys.KEY_FF_] = Keys.FWD;

		map[samsungKeys.KEY_RETURN] = Keys.BACK;
		map[samsungKeys.KEY_ENTER] = Keys.ENTER;
		map[samsungKeys.KEY_MENU] = Keys.MENU;
		map[samsungKeys.KEY_INFO] = Keys.INFO;
		map[samsungKeys.KEY_CH_UP] = Keys.PAGE_UP;
		map[samsungKeys.KEY_CH_DOWN] = Keys.PAGE_DOWN;

		map[samsungKeys.KEY_VOL_DOWN] = Keys.VOLUME_DOWN;
		map[samsungKeys.KEY_VOL_UP] = Keys.VOLUME_UP;
		map[samsungKeys.KEY_MUTE] = Keys.MUTE;

		map[samsungKeys.KEY_RED] = Keys.RED;
		map[samsungKeys.KEY_GREEN] = Keys.GREEN;
		map[samsungKeys.KEY_YELLOW] = Keys.YELLOW;
		map[samsungKeys.KEY_BLUE] = Keys.BLUE;

		map[samsungKeys.KEY_LEFT] = Keys.LEFT;
		map[samsungKeys.KEY_RIGHT] = Keys.RIGHT;
		map[samsungKeys.KEY_DOWN] = Keys.DOWN;
		map[samsungKeys.KEY_UP] = Keys.UP;
		map[samsungKeys.KEY_TOOLS] = Keys.TOOLS;
		map[samsungKeys.KEY_EXIT] = Keys.EXIT;
		map[samsungKeys.KEY_PRECH] = Keys.BACKSPACE;

		map[window['PL_TVMW_KEY_ASPECT']] = Keys.ASPECT_RATIO;

		return map;
	}
}
