/**
 * @constructor
 * @extends {HTMLElement}
 */
const PluginNNAVI = function() {};


/**
 * Returns a string in the form ‘T-INFOLINKxxxx-yyyyy’, where xxxx is
 * the device release year and yyyy the current version of Infolink
 * @type {function(): string}
 */
PluginNNAVI.prototype.GetFirmware;


/**
 * Takes MAC address at input
 * @type {function(string=): string}
 */
PluginNNAVI.prototype.GetDUID;


/**
 * Returns a string ex: LNXXB650_KOR
 * @type {function(): string}
 */
PluginNNAVI.prototype.GetModelCode;


/**
 * @type {function(number): undefined}
 */
PluginNNAVI.prototype.SetBannerState;
