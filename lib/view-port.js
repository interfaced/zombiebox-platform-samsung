/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2013-2019, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Common as CommonProportion} from 'zb/device/aspect-ratio/proportion';
import {warn} from 'zb/console/console';
import AbstractViewPort from 'zb/device/abstract-view-port';
import {Transferring} from 'zb/device/aspect-ratio/aspect-ratio';
import Rect from 'zb/geometry/rect';
import Point from 'zb/geometry/point';


/**
 */
export default class ViewPort extends AbstractViewPort {
	/**
	 * @param {Rect} containerRect
	 * @param {PluginPlayer} plugin
	 */
	constructor(containerRect, plugin) {
		super(containerRect);

		/**
		 * @type {PluginPlayer}
		 * @protected
		 */
		this._plugin = /** @type {PluginPlayer} */ (plugin);

		/**
		 * If the app resolution is higher than 960x540, the coordinates need to be scaled down
		 * before they are passed to the player plugin
		 * @type {number}
		 * @protected
		 */
		this._pluginScaleRatio = 540 / this._containerRect.getSizeY();

		/**
		 * @type {{
		 *     width: number,
		 *     height: number
		 * }}
		 * @protected
		 */
		this._videoInfo = {
			width: NaN,
			height: NaN
		};

		/**
		 * @const {number}
		 */
		this.DEFAULT_RATIO_MULTIPLIER = 16 / 9;
	}

	/**
	 * @override
	 */
	hasAspectRatioFeature() {
		return true;
	}

	/**
	 * @override
	 */
	hasAreaChangeFeature() {
		return true;
	}

	/**
	 * @override
	 */
	isAspectRatioSupported(ratio) {
		const {AUTO, KEEP, X4X3, X16X9} = CommonProportion;

		return [AUTO, KEEP, X4X3, X16X9].indexOf(ratio.getProportion()) !== -1;
	}

	/**
	 * @override
	 */
	updateViewPort() {
		const screenArea = this._calculateScreenArea();

		// SetDisplayArea accepts values that are within 960x540 area
		const scaleRatioPoint = Point.createByNumbers(this._pluginScaleRatio, this._pluginScaleRatio);
		const scaledArea = screenArea.scale(scaleRatioPoint);

		let {x, y} = scaledArea.getPointA().getValue();
		let width = scaledArea.getSizeX();
		let height = scaledArea.getSizeY();

		this._plugin.SetDisplayArea(Math.floor(x), Math.floor(y), Math.floor(width), Math.floor(height));

		if (this._isCropTransferring()) {
			const cropArea = this._calculateCropArea();
			({x, y} = cropArea.getPointA().getValue());
			width = cropArea.getSizeX();
			height = cropArea.getSizeY();

			// SetCropArea, despite the docs, accepts values that are within playing video area
			this._plugin.SetCropArea(x, y, width, height);
		}
	}

	/**
	 */
	updateVideoInfo() {
		const videoWidth = this._plugin.GetVideoWidth();
		const videoHeight = this._plugin.GetVideoHeight();

		if (!videoWidth || !videoHeight) {
			warn(`Can't update video info: ${videoWidth}x${videoHeight} is invalid`);

			return;
		}

		const isVideoInfoChanged = (
			videoWidth !== this._videoInfo.width ||
			videoHeight !== this._videoInfo.height
		);

		if (!isVideoInfoChanged) {
			return;
		}

		this._videoInfo = {
			width: videoWidth,
			height: videoHeight
		};

		// Update viewport when current configuration relies on video info
		if (this._isAutoProportion() || this._isCropTransferring()) {
			this.updateViewPort();
		}
	}

	/**
	 */
	resetVideoInfo() {
		this._videoInfo = {
			width: NaN,
			height: NaN
		};
	}

	/**
	 * @return {boolean}
	 * @protected
	 */
	_isAutoProportion() {
		const {AUTO, KEEP} = CommonProportion;
		const currentProportion = this._aspectRatio.getProportion();

		return currentProportion === KEEP || currentProportion === AUTO;
	}

	/**
	 * @return {boolean}
	 * @protected
	 */
	_isCropTransferring() {
		return this._aspectRatio.getTransferring() === Transferring.CROP;
	}

	/**
	 * @return {boolean}
	 * @protected
	 */
	_isLetterboxTransferring() {
		return this._aspectRatio.getTransferring() === Transferring.LETTERBOX;
	}

	/**
	 * @return {Rect}
	 * @protected
	 */
	_calculateCropArea() {
		const videoWidth = this._videoInfo.width;
		const videoHeight = this._videoInfo.height;

		let cropWidth = videoWidth;
		let cropHeight = videoHeight;

		if (this._isCropTransferring()) {
			const area = this.getCurrentArea();
			const areaMultiplier = area.getSizeY() / area.getSizeX();
			const aspectRatioMultiplier = this._getAspectRatioMultiplier();

			if (aspectRatioMultiplier > areaMultiplier) {
				cropHeight = videoWidth * areaMultiplier;
			} else {
				cropWidth = videoHeight / areaMultiplier;
			}
		}

		const cropX = (videoWidth - cropWidth) / 2;
		const cropY = (videoHeight - cropHeight) / 2;

		const cropPointA = Point.createByValue({x: cropX, y: cropY});
		const cropPointB = cropPointA.add(Point.createByValue({x: cropWidth, y: cropHeight}));

		return Rect.createByPoints(cropPointA, cropPointB);
	}

	/**
	 * @return {Rect}
	 * @protected
	 */
	_calculateScreenArea() {
		const area = this.getCurrentArea();
		const areaWidth = area.getSizeX();
		const areaHeight = area.getSizeY();

		let screenWidth = areaWidth;
		let screenHeight = areaHeight;

		if (this._isLetterboxTransferring()) {
			const areaMultiplier = areaHeight / areaWidth;
			const aspectRatioMultiplier = this._getAspectRatioMultiplier();

			if (aspectRatioMultiplier > areaMultiplier) {
				screenWidth = areaHeight / aspectRatioMultiplier;
			} else {
				screenHeight = areaWidth * aspectRatioMultiplier;
			}
		}

		const screenX = (areaWidth - screenWidth) / 2;
		const screenY = (areaHeight - screenHeight) / 2;

		const areaPointA = area.getPointA();
		const screenPointA = areaPointA.add(Point.createByValue({x: screenX, y: screenY}));
		const screenPointB = screenPointA.add(Point.createByValue({x: screenWidth, y: screenHeight}));

		return Rect.createByPoints(screenPointA, screenPointB);
	}

	/**
	 * @return {number}
	 * @protected
	 */
	_getAspectRatioMultiplier() {
		const currentProportion = this._aspectRatio.getProportion();

		let multiplier = this.DEFAULT_RATIO_MULTIPLIER;
		if (this._isAutoProportion() && this._videoInfo.height && this._videoInfo.width) {
			multiplier = this._videoInfo.height / this._videoInfo.width;
		} else if (currentProportion.y && currentProportion.x) {
			multiplier = currentProportion.y / currentProportion.x;
		}

		return multiplier;
	}
}
