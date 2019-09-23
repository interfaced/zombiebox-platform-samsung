/**
 * @constructor
 * @extends {HTMLElement}
 */
const PluginAudio = function() {};


/**
 * The SetVolumeWithKey function increases (+1) or decreases (-1) the volume level by increments of 1
 * depending on the specified key.
 * 0 - PL_AUDIO_VOLUME_KEY_UP : To increase volume level
 * 1 - PL_AUDIO_VOLUME_KEY_DOWN : To decrease volume level
 * @type {function(number): boolean}
 */
PluginAudio.prototype.SetVolumeWithKey;


/**
 * The GetVolume() function gets the DTV platform’s volume level. The range of volume is 0 ~ 100.
 * @type {function(): number} A value between 0 and 100 as a volume level on success, else a negative number
 */
PluginAudio.prototype.GetVolume;


/**
 * The GetUserMute() function gets information about the DTV platform UserMute state. UserMute is only the mute state
 * of the DTV speaker.
 * PLR_TRUE if UserMute is On, PLR_FALSE if UserMute is Off, a negative number if it fails to get information about
 * UserMute
 * UserMute is the mute state of the speaker on DTV. UserMute does not get information on whether the external audio
 * output device is currently used. For example, if a receiver is connected and the DTV user uses an audio device as
 * receiver, then GetUserMute cannot get information of the receiver’s mute state. In this case, use GetSystemMute for
 * getting information of the receiver’s mute state.
 * @type {function(): number}
 */
PluginAudio.prototype.GetUserMute;


/**
 * @type {function(number): number}
 */
PluginAudio.prototype.SetUserMute;


/**
 * @type {function(): number}
 */
PluginAudio.prototype.GetOutputDevice;
