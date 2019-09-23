/**
 * @constructor
 * @extends {MediaPlugin}
 */
const PluginPlayer = function() {};


/**
 * StartPlayback() has to be called with InitPlayer(), and it can’t be called with Play().
 * Also StartPlayback() can’t be called before InitPlayer() is called.
 *
 * @return {boolean}
 */
PluginPlayer.prototype.StartPlayback;


/**
 * Returns true if media player successfully pauses, or false if the media player fails to pause.
 *
 * @return {boolean}
 */
PluginPlayer.prototype.Pause;


/**
 * Returns true if media player successfully resumes, or false the media player fails to resume.
 *
 * @return {boolean}
 */
PluginPlayer.prototype.Resume;


/**
 * Returns true if successful, or false if the function fails.
 *
 * SetPlaybackSpeed() has be called after Play() function is called.
 *
 * @param {number} speed Specifies the playback speed in multiples of 2. This can be negative integer for
 * backward playback.
 * @return {boolean}
 */
PluginPlayer.prototype.SetPlaybackSpeed;


/**
 * Returns true if media player successfully jumps, or false if the media player fails to jump
 * @param {number} offset Relative time offset from current time in seconds
 */
PluginPlayer.prototype.JumpForward;


/**
 * Returns true if media player successfully jumps, or false if the media player fails to jump
 * @param {number} offset Relative time offset from current time in seconds
 */
PluginPlayer.prototype.JumpBackward;


/**
 * The duration of contents in seconds, or -1 if it fails to get the duration
 *
 * This function must be called after the OnStreamInfoReady event is received.
 *
 * @return {number}
 */
PluginPlayer.prototype.GetDuration;


/**
 *
 * // TODO: Does not work
 *
 * The video resolution in ‘width|height’ form, or -1 if it fails to get the resolution
 *
 * This function must be called after the OnStreamInfoReady event is received.
 * For example ‘1280|720’, if video resolution of the current content is 1280x720.
 *
 * @return {string}
 */
PluginPlayer.prototype.GetVideoResolution;


/**
 * GetVideoHeight returns the height size of currently playing video content.
 * has be called after OnStreamInfoReady callback function is called.
 * @return {number}
 */
PluginPlayer.prototype.GetVideoHeight;


/**
 * GetVideoWidth returns the width size of currently playing video content.
 * has be called after OnStreamInfoReady callback function is called
 * @return {number}
 */
PluginPlayer.prototype.GetVideoWidth;


/**
 * Available bitrates information for currently playing content as a string, or -1 if the function fails.
 *
 * Each bitrate in a byte is separated by separator ‘|’.
 * For example, if the currently playing content can support 3 different bitrates for adaptive streaming,
 * 100Kbps, 200kbps, 300kbps, then ‘GetAvailableBitrates’ returns the string ‘102400|204800|307200’.
 * The GetAvailableBitrates() returns valid value only when it is called after calling Play().
 *
 * @return {string}
 */
PluginPlayer.prototype.GetAvailableBitrates;


/**
 * The bitrates of the currently playing content in byte number format,
 * or -1 if the function fails
 *
 * Returns a valid value only when it is called after calling Play().
 *
 * @return {number}
 */
PluginPlayer.prototype.GetCurrentBitrates;


/**
 * A string which includes the start and end times of the current live content the media server can currently support.
 *
 * This API is only available for some contents that use Widevine live streaming solution.
 *
 * @return {string}
 */
PluginPlayer.prototype.GetLiveDuration;


/**
 * The ClearScreen() function erases TV screen with black
 *
 * @return {boolean} It returns true if it succeeds, otherwise it returns false.
 */
PluginPlayer.prototype.ClearScreenForImage;


/**
 * The SetTransitionEffect function sets transition effect for slide show.
 *
 * @param {number} effect Specifies the effect type
 * The effect types are as follows:
 * NONE : -2,
 * INIT : -1,
 * FADE1 : 0,
 * FADE2 : 1,
 * BLIND : 2,
 * SPIRAL : 3,
 * CHECKER : 4,
 * LINEAR : 5,
 * STAIRS : 6,
 * WIPE : 7,
 * RANDOM : 8
 * @return {boolean}
 */
PluginPlayer.prototype.SetTransitionEffect;


/**
 * The SetInitialTimeOut function sets the maximum time out value for initial buffering before starting playback.
 * @param {number} second Specifies the time out value for initial buffering before starting playback.
 * This API is optional and media player has default value.
 * @return {boolean}
 */
PluginPlayer.prototype.SetInitialTimeOut;


/**
 * The SetCropArea function sets the cropped area the widget wants to display from the original contents.
 *
 * @param {number} x Specifies the the initial horizontal position of the cropped image. The initial x-coordinate
 * of the upper-left corner of the cropped image relative to the upper-left corner of the original image.
 * @param {number} y Specifies the initial vertical position of the cropped image. The initial y-coordinate of
 * the upper-left corner of the cropped image relative to the upper-left corner of the original image.
 * @param {number} width Specifies the width of the cropped area. This value must be smaller
 * than the width of the original image.
 * @param {number} height Specifies the height of the cropped area. This value must be smaller than the height of
 * the original image.
 * @return {boolean}
 */
PluginPlayer.prototype.SetCropArea;


/**
 * The SetPlayerProperty function sets the property, such as cookie, 3D setting, and so on, of the media player.
 *
 * This API has to be called between InitPlayer() and StartPlayback(). Thus, Play() must not be used to use
 * SetPlayerProperty().
 *
 * @param {number} Type Specifies the type of property the widget want to sets
 * 1 : Cookie
 * @param {string} StrParam Specifies the string parameter of the specified property defined in 1st,
 * Type, parameter. For example, Cookie for cookie property.
 * @param {number} NumParam Specifies the number parameter of property defined in 1st, Type, parameter.
 * For example, Cookie value length for cookie property.
 * @return {boolean}
 */
PluginPlayer.prototype.SetPlayerProperty;


/**
 * The SetTotalBufferSize function sets the total buffer size of the media player.
 *
 * @param {number} size Specifies the total buffer size for streaming in bytes
 * This API is optional and media player has default value.
 * @return {number} 1 if the command is successful, or -1 if the command fails.
 */
PluginPlayer.prototype.SetTotalBufferSize;


/**
 * The SetInitialBufferSize command sets the initial buffered data size before start playback.
 *
 * The SetInitialBufferSize command sets the initial buffered data size before starting playback.
 * This command must be called between InitPlayer and StartPlayback command. This command is optional,
 * so if widget does not call this command, the media player uses uses the recommended default size.
 *
 * @param {number} bytes Specifies the total buffer size for streaming in bytes
 * @return {number} 1 if the command is successful, or -1 if the command fails.
 *
 */
PluginPlayer.prototype.SetInitialBufferSize;


/**
 * The SetPendingBufferSize command sets the minimum data size which goes out from buffering,
 * when media player is on buffering status.
 *
 * This command must be called between the InitPlayer and StartPlayback command. This command is optional,
 * so if the widget does not call this command, the media player uses the default size that is recommended.
 *
 * @param {number} bytes Specifies the total buffer size for streaming in bytes
 * @return {number} 1 if the command is successful, or -1 if the command fails.
 */
PluginPlayer.prototype.SetPendingBufferSize;


/**
 * The SetMacrovision function specifies the macrovision level.
 *
 * @param {number} macrovisionType
 * 0 : APS_ALL_OFF
 * 1 : APS_AGC_ON_ONLY
 * 2 : APS_AGC_ON_CS_2L
 * 3 : APS_AGC_ON_CS_4L
 * @return {boolean}
 */
PluginPlayer.prototype.SetMacrovision;


/**
 * The SetVBIData function specifies VBIData output level.
 *
 *
 * @param {number} macrovisionType Specifies the macrovisionType level.
 * 0 : APS_ALL_OFF
 * 1 : APS_AGC_ON_ONLY
 * 2 : APS_AGC_ON_CS_2L
 * 3 : APS_AGC_ON_CS_4L
 * @param {number} cgmsType
 * Specifies the cgms type level.
 * 0: CGMS_COPY_FREE
 * 1 : CGMS_COPY_NO_MORE
 * 2 : CGMS_COPY_ONCE
 * 3 : CGMS_COPY_NEVER
 *
 * @return {boolean}
 */
PluginPlayer.prototype.SetVBIData;


/**
 * The SetICT function sets the ICT output level.
 *
 * This API has to be called when OnStreamInfoReady event is called.
 * If widget doesn’t call this function, system will off the ICT.
 *
 * @param {boolean} bICTOn
 *
 */
PluginPlayer.prototype.SetICT;


/**
 * The OnAuthenticationFailed event is sent by media player when it fails to play because authentication
 * process has been failed.
 *
 * @type {string}
 */
PluginPlayer.prototype.OnAuthenticationFailed;


/**
 * OnBufferingProgress event is sent by media play to notify how much data it has to receive more to get out from
 * buffering status.
 *
 * The minimum value of parameter is 0 and the maximum is 100.
 *
 * type {function(number)} give current progress in percents
 * @type {string}
 */
PluginPlayer.prototype.OnBufferingProgress;


/**
 * OnCurrentPlayTime is sent by media player to notify current playback time.
 *
 * type {function(number)} give playback time in milli-sec
 * @type {string}
 */
PluginPlayer.prototype.OnCurrentPlayTime;

/**
 * Event to notify that the Video resolution has been changed during playback. This event is available only for some
 * specific contents which use HAS streaming solution.
 *
 * @type {string}
 */
PluginPlayer.prototype.OnResolutionChanged;
