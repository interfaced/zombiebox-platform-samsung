/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2013-2019, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {State} from 'zb/device/interfaces/i-video';
import AbstractVideo from 'zb/device/abstract-video';
import Rect from 'zb/geometry/rect';
import Audio from './audio';
import ScreenSaverController from './screen-saver-controller';
import ViewPort from './view-port';
import VolumeOSDController from './volume-osd-controller';


/**
 * Video object abstraction
 */
export default class Video extends AbstractVideo {
	/**
	 * @param {Rect} rect
	 * @param {ScreenSaverController} screenSaverController
	 * @param {VolumeOSDController} volumeOSDController
	 * @param {string} hardwareVersion
	 * @param {PluginPlayer} pluginPlayer
	 * @param {PluginAudio} pluginAudio
	 * @param {PluginTV} pluginTV
	 */
	constructor(
		rect,
		screenSaverController,
		volumeOSDController,
		hardwareVersion,
		pluginPlayer,
		pluginAudio,
		pluginTV
	) {
		super(rect);

		/**
		 * @type {ViewPort}
		 * @protected
		 */
		this._viewport;

		/**
		 * @type {ScreenSaverController}
		 * @protected
		 */
		this._screenSaverController = screenSaverController;

		/**
		 * @type {VolumeOSDController}
		 * @protected
		 */
		this._volumeOSDController = volumeOSDController;

		/**
		 * @type {PluginPlayer}
		 * @protected
		 */
		this._pluginPlayer = pluginPlayer;

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

		/**
		 * @type {Audio}
		 * @protected
		 */
		this._audio = new Audio(this._pluginAudio, this._pluginTV);

		/**
		 * @type {?State}
		 * @protected
		 */
		this._stateBeforeBuffering = null;

		/**
		 * @type {number}
		 * @protected
		 */
		this._position = NaN;

		/**
		 * @type {number}
		 * @protected
		 */
		this._rate = NaN;

		/**
		 * @type {number}
		 * @protected
		 */
		this._startPosition = NaN;

		/**
		 * @type {Array<Function>}
		 * @protected
		 */
		this._globalMethods = [];

		/**
		 * @type {boolean}
		 * @protected
		 */
		this._isInfoReady = false;

		/**
		 * @type {boolean}
		 * @protected
		 */
		this._isFirstTimeUpdateFired = false;

		/**
		 * @type {boolean}
		 * @protected
		 */
		this._isPlayFromPositionInProgress = false;

		/**
		 * @type {boolean}
		 * @protected
		 */
		this._isPlayFromPositionBroken = ['2012', '2013'].indexOf(hardwareVersion) !== -1;

		/**
		 * @type {?boolean}
		 * @protected
		 */
		this._wasVolumeOSDEnabledBeforePlayFromPosition = null;

		/**
		 * @type {?boolean}
		 * @protected
		 */
		this._wasVolumeMutedBeforePlayFromPosition = null;

		/**
		 * @type {string}
		 * @private
		 */
		this._url = '';

		this._finishPlayFromPosition = this._finishPlayFromPosition.bind(this);

		this._initViewPort();
		this._setState(State.UNINITED);
		this._reset();
	}

	/**
	 * @override
	 */
	setPlaybackRate(rate) {
		this._pluginPlayer.SetPlaybackSpeed(rate);
		this._setInternalPlaybackRate(rate);
	}

	/**
	 * @override
	 */
	getPlaybackRate() {
		return this._rate;
	}

	/**
	 * @override
	 */
	resume() {
		this._pluginPlayer.Resume();

		this._setState(State.PLAYING);
		this._fireEvent(this.EVENT_PLAY);

		this.setPlaybackRate(1); // For reset playback rate after forward/rewind
		this._screenSaverController.enableScreenSaver(false);
	}

	/**
	 * @override
	 */
	destroy() {
		this._pluginPlayer.Stop();
		this._setState(State.DEINITED);

		this._url = '';
	}

	/**
	 * @override
	 */
	pause() {
		this._pluginPlayer.Pause();

		this._setState(State.PAUSED);
		this._fireEvent(this.EVENT_PAUSE);

		this._setInternalPlaybackRate(0);
		this._screenSaverController.enableScreenSaver(true);
	}

	/**
	 * @override
	 */
	stop() {
		this._pluginPlayer.Stop();

		this._setState(State.STOPPED);
		this._fireEvent(this.EVENT_STOP);

		this._setInternalPlaybackRate(1);
		this._screenSaverController.enableScreenSaver(true);
	}

	/**
	 * @override
	 */
	setVolume(value) {
		const volume = this._audio.getVolume();
		const isVolumeUp = volume < value;

		let distance = Math.abs(volume - value);
		while (distance > 0) {
			if (isVolumeUp) {
				this._audio.up();
			} else {
				this._audio.down();
			}
			distance--;
		}

		this._fireEvent(this.EVENT_VOLUME_CHANGE, value);
	}

	/**
	 * @override
	 */
	getVolume() {
		return this._audio.getVolume();
	}

	/**
	 * @override
	 */
	getMuted() {
		return this._audio.isMuted();
	}

	/**
	 * @override
	 */
	setMuted(value) {
		if (value !== this.getMuted()) {
			this._audio.setMuted(value);
			this._fireEvent(this.EVENT_VOLUME_CHANGE, this.getVolume());
		}
	}

	/**
	 * @override
	 */
	getDuration() {
		// TODO: check for stream ready
		return parseInt(this._pluginPlayer.GetDuration(), 10);
	}

	/**
	 * @override
	 */
	play(url, startFrom = NaN) {
		let samsungUrl = url;
		if (url.indexOf('m3u8') !== -1 && url.indexOf('|COMPONENT=HLS') === -1) {
			samsungUrl += '|COMPONENT=HLS';
		}

		const stoppedStates = [
			State.DEINITED,
			State.UNINITED,
			State.STOPPED
		];

		if (stoppedStates.indexOf(this.getState()) === -1) {
			this.stop();
		}

		this._reset();
		this._startPosition = startFrom;
		this._bindPluginListeners();

		this._pluginPlayer.Play(samsungUrl);
		this._setState(State.LOADING);

		this._url = url;

		this._viewport.updateViewPort();

		if (!isNaN(this._startPosition)) {
			this._startPlayFromPosition();
			this.once(this.EVENT_STOP, this._finishPlayFromPosition);
			this.once(this.EVENT_LOADED_META_DATA, this._finishPlayFromPosition);
		}

		this._screenSaverController.enableScreenSaver(false);
	}

	/**
	 * @override
	 */
	getPosition() {
		return this._position;
	}

	/**
	 * @override
	 */
	setPosition(position) {
		const currentPosition = this.getPosition();
		const diff = Math.round((currentPosition - position) / 1000);

		if (diff < 0) {
			this._pluginPlayer.JumpForward(Math.abs(diff));
		} else if (diff > 0) {
			this._pluginPlayer.JumpBackward(diff);
		}
	}

	/**
	 * @override
	 */
	togglePause() {
		if (this._state === State.PAUSED ||
			this._state === State.SEEKING) {
			this.resume();
		} else {
			this.pause();
		}
	}

	/**
	 * @override
	 */
	forward() {
		if (this._state === State.PLAYING ||
			this._state === State.SEEKING) {
			if (this._rate < 0) {
				if (this.setPlaybackRate(2)) {
					this._setState(State.SEEKING);

					return true;
				}
			} else if (this._rate * 2 <= 32) {
				if (this.setPlaybackRate(this._rate * 2)) {
					this._setState(State.SEEKING);

					return true;
				}
			}
		}

		return false;
	}

	/**
	 * @override
	 */
	rewind() {
		if (this._state === State.PLAYING ||
			this._state === State.SEEKING) {
			if (this._rate > 0) {
				if (this.setPlaybackRate(-2)) {
					this._setState(State.SEEKING);

					return true;
				}
			} else if (this._rate * 2 >= -32) {
				if (this.setPlaybackRate(this._rate * 2)) {
					this._setState(State.SEEKING);

					return true;
				}
			}
		}

		return false;
	}

	/**
	 * @override
	 */
	getUrl() {
		return this._url;
	}

	/**
	 * @override
	 */
	_createViewPort(containerRect) {
		return new ViewPort(containerRect, this._pluginPlayer);
	}

	/**
	 * @param {number} rate
	 * @protected
	 */
	_setInternalPlaybackRate(rate) {
		if (rate !== this._rate) {
			this._rate = rate;
			this._fireEvent(this.EVENT_RATE_CHANGE, this._rate);
		}
	}

	/**
	 * @protected
	 */
	_bindPluginListeners() {
		this._unbindAllListeners(this._createGlobalMethod(() => {/* Noop */}));

		this._pluginPlayer.OnBufferingComplete = this._createGlobalMethod(this._onBufferingComplete);
		this._pluginPlayer.OnBufferingStart = this._createGlobalMethod(this._onBufferingStart);
		this._pluginPlayer.OnConnectionFailed = this._createGlobalMethod(this._onConnectionFailed);
		this._pluginPlayer.OnNetworkDisconnected = this._createGlobalMethod(this._onNetworkDisconnected);
		this._pluginPlayer.OnRenderError = this._createGlobalMethod(this._onRenderError);
		this._pluginPlayer.OnRenderingComplete = this._createGlobalMethod(this._onRenderingComplete);
		this._pluginPlayer.OnStreamInfoReady = this._createGlobalMethod(this._onStreamInfoReady);
		this._pluginPlayer.OnStreamNotFound = this._createGlobalMethod(this._onStreamNotFound);
		this._pluginPlayer.OnAuthenticationFailed = this._createGlobalMethod(this._onAuthFailed);
		this._pluginPlayer.OnCurrentPlayTime = this._createGlobalMethod(this._onCurrentPlayTime);
		this._pluginPlayer.OnResolutionChanged = this._createGlobalMethod(this._onResolutionChanged);
	}

	/**
	 * @param {string} listener
	 * @protected
	 */
	_unbindAllListeners(listener) {
		this._pluginPlayer.OnBufferingComplete = listener;
		this._pluginPlayer.OnBufferingStart = listener;
		this._pluginPlayer.OnConnectionFailed = listener;
		this._pluginPlayer.OnNetworkDisconnected = listener;
		this._pluginPlayer.OnRenderError = listener;
		this._pluginPlayer.OnRenderingComplete = listener;
		this._pluginPlayer.OnStreamInfoReady = listener;
		this._pluginPlayer.OnStreamNotFound = listener;
		this._pluginPlayer.OnAuthenticationFailed = listener;
		this._pluginPlayer.OnCurrentPlayTime = listener;
		this._pluginPlayer.OnResolutionChanged = listener;
	}

	/**
	 * @protected
	 */
	_onBufferingComplete() {
		if (this._stateBeforeBuffering) {
			this._setState(this._stateBeforeBuffering);

			if (this.getState() === State.PLAYING && isNaN(this._startPosition)) {
				this._fireEvent(this.EVENT_PLAY);
			}

			this._stateBeforeBuffering = null;
		}
	}

	/**
	 * @protected
	 */
	_onBufferingStart() {
		this._stateBeforeBuffering = this.getState();
		this._setState(State.BUFFERING);
		this._fireEvent(this.EVENT_BUFFERING);
	}

	/**
	 * @protected
	 */
	_onConnectionFailed() {
		this._setState(State.ERROR);
		this._fireEvent(this.EVENT_ERROR, 'connection-failed');
	}

	/**
	 * @protected
	 */
	_onNetworkDisconnected() {
		this._setState(State.ERROR);
		this._fireEvent(this.EVENT_ERROR, 'network-disconnected');
	}

	/**
	 * @protected
	 */
	_onRenderError() {
		this._setState(State.ERROR);
		this._fireEvent(this.EVENT_ERROR, 'render-error');
	}

	/**
	 * @protected
	 */
	_onStreamNotFound() {
		this._setState(State.ERROR);
		this._fireEvent(this.EVENT_ERROR, 'stream-not-found');
	}

	/**
	 * @protected
	 */
	_onAuthFailed() {
		this._setState(State.ERROR);
		this._fireEvent(this.EVENT_ERROR, 'auth-failed');
	}

	/**
	 * @param {string} position
	 * @protected
	 */
	_onCurrentPlayTime(position) {
		// Prevent foreign time updates
		if (!this._isInfoReady) {
			return;
		}

		const parsedPosition = parseInt(position, 10);

		if (this._isPlayFromPositionInProgress && !isNaN(this._startPosition)) {
			let isTimeToSetPosition = true;
			if (this._isPlayFromPositionBroken) {
				isTimeToSetPosition = parsedPosition >= PLAY_FROM_POSITION_DELAY;
			}

			if (isTimeToSetPosition) {
				this._pluginPlayer.JumpForward(Math.round(this._startPosition / 1000));
				this._startPosition = NaN;
			}

			return;
		}

		this._position = parsedPosition;

		if (!this._isFirstTimeUpdateFired && this._position > 0) {
			this._isFirstTimeUpdateFired = true;
			this._fireEvent(this.EVENT_LOADED_META_DATA);
		}

		if (this.getPlaybackRate() === 1 && this.getState() !== State.PLAYING) {
			this._setState(State.PLAYING);
			this._fireEvent(this.EVENT_PLAY);
		}

		this._fireEvent(this.EVENT_TIME_UPDATE, this._position);
	}

	/**
	 * @protected
	 */
	_onRenderingComplete() {
		this._fireEvent(this.EVENT_ENDED);
	}

	/**
	 * @protected
	 */
	_onStreamInfoReady() {
		this._isInfoReady = true;
		this._position = this._startPosition || 0;

		this._fireEvent(this.EVENT_DURATION_CHANGE, this.getDuration());
		this._viewport.updateVideoInfo();
	}

	/**
	 * @protected
	 */
	_onResolutionChanged() {
		this._viewport.updateVideoInfo();
	}

	/**
	 * @protected
	 */
	_reset() {
		this._pluginPlayer.SetPlaybackSpeed(1);

		this._rate = 1;
		this._position = 0;
		this._isInfoReady = false;
		this._isFirstTimeUpdateFired = false;

		this._viewport.resetVideoInfo();
	}

	/**
	 * @param {Function} method
	 * @return {string}
	 * @protected
	 */
	_createGlobalMethod(method) {
		const index = this._globalMethods.indexOf(method);
		let methodName = `SamsungPlayerCallback${index}`;
		if (index === -1) {
			this._globalMethods.push(method);
			methodName = `SamsungPlayerCallback${this._globalMethods.length - 1}`;
			window[methodName] = method.bind(this);
		}

		return methodName;
	}

	/**
	 * Playing from a position may cause first frame displaying before seeking,
	 * so we have to hide the display area and disable sound until the position is applied
	 * @protected
	 */
	_startPlayFromPosition() {
		this._isPlayFromPositionInProgress = true;
		this._wasVolumeMutedBeforePlayFromPosition = this.isMuted();
		this._wasVolumeOSDEnabledBeforePlayFromPosition = this._volumeOSDController.isVolumeOSDEnabled();

		this._audio.setMuted(true);
		this._volumeOSDController.enableVolumeOSD(false);

		this._minimizeDisplayArea(true);
	}

	/**
	 * @see _startPlayFromPosition
	 * @protected
	 */
	_finishPlayFromPosition() {
		if (!this._isPlayFromPositionInProgress) {
			return;
		}

		this._audio.setMuted(!!this._wasVolumeMutedBeforePlayFromPosition);
		if (this._wasVolumeOSDEnabledBeforePlayFromPosition) {
			this._volumeOSDController.enableVolumeOSD(true);
		}

		this._minimizeDisplayArea(false);

		this._isPlayFromPositionInProgress = false;
		this._wasVolumeMutedBeforePlayFromPosition = null;
		this._wasVolumeOSDEnabledBeforePlayFromPosition = null;
	}

	/**
	 * @param {boolean} state
	 * @protected
	 */
	_minimizeDisplayArea(state) {
		if (state) {
			// Change display area directly, without applying of display ratio
			this._pluginPlayer.SetDisplayArea(0, 0, 1, 1);
		} else {
			this._viewport.updateViewPort();
		}
	}
}


/**
 * This is the magic heuristic constant for 2012, 2013 model year devices
 * When playing started from a specified position we have to use this delay before seeking,
 * otherwise the position will not be applied
 * @const {number}
 */
export const PLAY_FROM_POSITION_DELAY = 100;
