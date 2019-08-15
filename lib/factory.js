/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2013-2019, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import app from 'generated/app';
import Device from './device';


/**
 * @return {?Device}
 */
export default function create() {
	const isOrsayPlatform = Device.detect();

	if (isOrsayPlatform) {
		const pluginContainer = app.getPluginContainer();

		return new Device(pluginContainer);
	}

	return null;
}
