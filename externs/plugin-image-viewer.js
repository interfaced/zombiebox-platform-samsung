/**
 * @constructor
 * @extends {MediaPlugin}
 */
const PluginImageViewer = function() {};


/**
 * The SetDisplayLock function locks or unlocks the screen.
 * @type {function(boolean): boolean}
 */
PluginImageViewer.prototype.SetDisplayLock;


/**
 * The SetTransitionEffect function sets transition effect for slide show.
 *
 * Specifies the effect type
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
 *
 * Not supported by emulator
 *
 * @type {function(number): boolean}
 */
PluginImageViewer.prototype.SetTransitionEffect;


/**
 * The ShowImage function draws a picture on the screen.
 *
 * ShowImage() has to be called with InitPlayer(). It cannot be called with Play().
 * ShowImage() cannot be called before InitPlayer() is called.
 *
 * @return {boolean}
 */
PluginImageViewer.prototype.ShowImage;
