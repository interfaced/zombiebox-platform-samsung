/**
 * @class
 */
function PluginSEF() {}


/**
 * Event callback.
 * @type {Function}
 */
PluginSEF.prototype.OnEvent = function() {};


/**
 * The Open API initiates the plugin module and returns a label.
 * @type {function(string, string, string): *}
 */
PluginSEF.prototype.Open = function() {};


/**
 * The Execute API executes commands in the plugin.
 * @type {function(string, ...*)}
 */
PluginSEF.prototype.Execute = function() {};


/**
 * The Close API destroys the plugin module. To destroy the plugin object, use this interface without an argument.
 * @type {function()}
 */
PluginSEF.prototype.Close = function() {};
