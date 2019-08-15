/**
 * @class
 * @extends {HTMLElement}
 */
const MediaPlugin = function() {};


/**
 * The ClearScreen function clears the TV screen. It is normally used when the widget changes the display area.
 * @return {boolean}
 */
MediaPlugin.prototype.ClearScreen;


/**
 * The version of media player in the form of ‘UNIPLAYER-000000’.
 *
 * @return {string}
 */
MediaPlugin.prototype.GetPlayerVersion;


/**
 * The GetVideoHeight() function gets the height of the currently playing video.
 * @type {number}
 */
MediaPlugin.prototype.GetVideoHeight;


/**
 * The GetVideoWidth() function gets the width of the image.
 * @type {number}
 */
MediaPlugin.prototype.GetVideoWidth;


/**
 * The InitPlayer() should not be used with Play() API. If widget uses InitPlayer(),
 * it has to use StartPlayback() to play a content, otherwise it has to use Play() only.
 *
 * When InitPlayer() is used, it has to come first before other APIs are called.
 *
 * Always return true
 *
 * @type {function(string): boolean}
 */
MediaPlugin.prototype.InitPlayer;


/**
 * The Play function starts playing the content specified by url.
 * Return true on success, else false
 *
 * @param {string} url
 * @return {boolean}
 */
MediaPlugin.prototype.Play;


/**
 * The SetDisplayArea function sets the area to display video of content in TV screen.
 *
 * @param {number} x Specifies the initial x-coordinate of display area on TV screen. This x value must be
 * smaller than TV screen width, 960.
 * @param {number} y Specifies the initial y-coordinate of display area on TV screen. This y value must be
 * smaller than TV screen height, 540.
 * @param {number} width The width of the display area. This value must be smaller than width of TV screen.
 * @param {number} height The height of crop area from source Image. This value must be smaller than
 * height of source image.
 * @return {boolean}
 */
MediaPlugin.prototype.SetDisplayArea = function(x, y, width, height) {};


/**
 * Returns true if the media player successfully stops, or false if the media player fails to stop.
 *
 * @return {boolean}
 */
MediaPlugin.prototype.Stop;


/**
 * The OnBufferingComplete event is sent by media player when it gets out of buffering status.
 * type {function()}
 * @type {string}
 */
MediaPlugin.prototype.OnBufferingComplete;


/**
 * OnBufferingStart event is sent by media player when it goes on buffering status.
 * type {function()}
 * @type {string}
 */
MediaPlugin.prototype.OnBufferingStart;


/**
 * OnConnectionFailed event is sent by media player when it fails to connect to streaming server.
 *
 * OnConnectionFailed event is different from OnNetworkDisconnected. This event is sent only when media player fails
 * to connect to server at the begining or at the jump in HTTP and HTTPS streaming.
 *
 * @type {string}
 */
MediaPlugin.prototype.OnConnectionFailed;


/**
 * OnNetworkDisconnected is sent by media player when it knows that ethernet is disconnected or streaming server stops
 * to support content in the middle of streaming.
 *
 * Receiving OnNetworkDisconnected event means media player already succeed to connect to streaming server. Usually
 * this event means network is disconnected during the streaming.
 * @type {string}
 */
MediaPlugin.prototype.OnNetworkDisconnected;


/**
 * OnRenderError event is sent by media player when it found that there are some problem in rendering because
 * of the reason specified by parameter.
 *
 * type {function(number)}
 *  RenderErrorType Parameter value of OnRenderError means as follow:
 *  1 Unsupported container
 *  2 Unsupported video codec
 *  3 Unsupported audio codec
 *  4 Unsupported video resolution
 *  @type {string}
 */
MediaPlugin.prototype.OnRenderError;


/**
 * The OnRenderingComplete event is sent by media player when it reaches to the end of stream.
 * @type {string}
 */
MediaPlugin.prototype.OnRenderingComplete;


/**
 * The OnStreamInfoReady event is sent by the media player is when it is ready to send content information such as
 * duration and video resolution after parsing the stream.
 *
 * There are a few APIs which gives valid information only when they are called after OnStreamInfoReady() event is sent.
 * APIs such as GetDuration(), GetVideoWidth(), and GetVideoHeight() are have to be used after widget get
 * OnStreamInfoReady event.
 * @type {string}
 */
MediaPlugin.prototype.OnStreamInfoReady;


/**
 * OnStreamNotFound event is sent by media player when it fails to play because streaming server replys that the stream
 * specified by url parameter of Play() API is not exist.
 *
 * @type {string}
 */
MediaPlugin.prototype.OnStreamNotFound;
