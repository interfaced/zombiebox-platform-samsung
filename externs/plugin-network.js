/**
 * @constructor
 */
const PluginNetwork = function() {};


/**
 * 1 if connected,
 * 0 if not connected,
 * -1 if error
 * @param {number=} opt_interfaceType type of interface (Wired/Wireless) 1 = wired, 0 = wireless
 * @return {number}
 */
PluginNetwork.prototype.CheckPhysicalConnection = function(opt_interfaceType) {};


/**
 * @param {number} interfaceType
 * @return {number} 1 if HTTP is operating successfully, 0 if HTTP is not available, -1 if error
 * @constructor
 */
PluginNetwork.prototype.CheckHTTP = function(interfaceType) {
	return 0;
};


PluginNetwork.prototype.CheckDNS = function() {};
PluginNetwork.prototype.CheckGateway = function() {};


/**
 * @param {number} interfaceType type of interface (Wired/Wireless) 1 = wired, 0 = wireless
 * @return {string}
 */
PluginNetwork.prototype.GetIP = function(interfaceType) {};


/**
 * @param {number=} opt_interfaceType type of interface (Wired/Wireless) 1 = wired, 0 = wireless
 * @return {string}
 */
PluginNetwork.prototype.GetMAC = function(opt_interfaceType) {};


PluginNetwork.prototype.GetActiveType = function() {};
PluginNetwork.prototype.GetDNS = function() {};
PluginNetwork.prototype.GetDNSMode = function() {};
PluginNetwork.prototype.GetGateway = function() {};
PluginNetwork.prototype.GetHostAddr = function() {};
PluginNetwork.prototype.GetHWaddr = function() {};
PluginNetwork.prototype.GetNetMask = function() {};
PluginNetwork.prototype.GetStatus = function() {};
PluginNetwork.prototype.GetIPMode = function() {};
PluginNetwork.prototype.GetNetworkInfo = function() {};
PluginNetwork.prototype.GetNetworkType = function() {};


PluginNetwork.prototype.IsValidDNS = function() {};
PluginNetwork.prototype.IsValidGateway = function() {};
PluginNetwork.prototype.IsValidIP = function() {};
PluginNetwork.prototype.IsValidMAC = function() {};
PluginNetwork.prototype.IsValidSubnetMask = function() {};


PluginNetwork.prototype.SetDNSMode = function() {};
PluginNetwork.prototype.SetIPMode = function() {};
PluginNetwork.prototype.CreatePlugin = function() {};
