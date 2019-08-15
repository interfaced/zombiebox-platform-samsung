/**
 * @class
 * @extends {HTMLElement}
 */
const PluginExternalWidgetInterface = function() {};


/**
 * Read account data from SecureStorage
 * Returns data from account or null in case of error
 * @type {function(): ?string}
 */
PluginExternalWidgetInterface.prototype.AccountRead;


/**
 * Removes account data from SecureStorage
 * Returns status of operation
 * @type {function(): boolean}
 */
PluginExternalWidgetInterface.prototype.AccountRemove;


/**
 * Writes account data to SecureStorage
 * Returns status of operation
 * Arguments:
 *     0 - <string> input data to be written
 * @type {function(string): boolean}
 */
PluginExternalWidgetInterface.prototype.AccountWrite;


/**
 * GetESN string for needed service
 * Returns ESN string or null in case of error
 * Arguments:
 *     0 - <string> name of the widget
 * @type {function(string): ?string}
 */
PluginExternalWidgetInterface.prototype.GetESN;


/**
 * Checks the activation status of the widget
 * Returns status of widget active
 * Arguments:
 *     0 - <string> name of the widget
 * @type {function(string): boolean}
 */
PluginExternalWidgetInterface.prototype.IsBound;


/**
 * Deactivate specific widget
 * Returns status of operation
 * Arguments:
 *     0 - <string> name of the widget
 * @type {function(string): boolean}
 */
PluginExternalWidgetInterface.prototype.UnBindWidget;
