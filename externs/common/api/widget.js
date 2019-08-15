/**
 * @class
 */
Common.API.Widget = function() {};


/**
 * The sendReadyEvent() method notifies the Application Manager that the application is ready to be displayed.
 * This event is passed to the display and the application is run on the screen.
 * Since Samsung Smart TV version 2.265
 */
Common.API.Widget.prototype.sendReadyEvent = function() {};


/**
 * The sendExitEvent() method brings about the same effect as pressing the Exit key. Stops the application and returns
 * to the TV screen.
 * Since Samsung Smart TV version 2.265
 */
Common.API.Widget.prototype.sendExitEvent = function() {};


/**
 * The sendReturnEvent() method brings about the same effect as pressing the Return key. Finishes the application
 * and takes you to the Application Manager.
 * Since Samsung Smart TV version 2.265
 */
Common.API.Widget.prototype.sendReturnEvent = function() {};


/**
 * The blockNavigation() method ensures that key event cannot be forced to return.
 * The KEY_RETURN and KEY_EXIT events forcibly close the operating application. The function prevents forced closure
 * and keep being executing.
 * (Since Samsung Smart TV version 2.265)
 * @param {Event} event
 */
Common.API.Widget.prototype.blockNavigation = function(event) {};


/**
 * The putInnerHTML() method fixes memory issues.
 * Required to use this method because the repetitive use of innerHTML can cause memory issues.
 * (Since Samsung Smart TV version 2.265)
 */
Common.API.Widget.prototype.putInnerHTML = function() {};


/**
 * The getChannelWidgetListPath() method gets the path of the xml file having the child application list of the current
 * channel-bound application. This method is used when the channel-bound application needs information about
 * the currently installed child application.
 * (Since Samsung Smart TV version 2.265)
 * @return {string} xml file path
 */
Common.API.Widget.prototype.getChannelWidgetListPath = function() {};


/**
 * The getSearchWidgetListPath() method gets the path of the xml file having a list of related applications.
 * This method is used when a search tag in config.xml requires information about an application whose search tag is
 * set as ‘y’.
 * (Since Samsung Smart TV version 2.265)
 * @return {string} xml file path
 */
Common.API.Widget.prototype.getSearchWidgetListPath = function() {};


/**
 * The runSearchWidget() method is called when an application is executed in another application.
 * This method is used when the channel-bound application requires information on the installed child application at
 * present.
 * (Since Samsung Smart TV version 2.265)
 * @param {string} appId The application ID you intend to operate.
 * @param {string} extraInfo The string transferred to the executing application.
 */
Common.API.Widget.prototype.runSearchWidget = function(appId, extraInfo) {};


/**
 * The checkSapTicket() method is called while checking validity of the ticket for currently logged-in user.
 * Register event handler for passing the return value.
 * If you have valid ticket, the return value is "stat=ok&ticket=686a8281-e952-4dcc-a67b-57e8f92e5530"
 * Otherwise, it is "stat=fail&ticket=null".
 * (Since Samsung Smart TV version 3.037)
 */
Common.API.Widget.prototype.checkSapTicket = function() {};


/**
 * The requestSapTicket() method requests a new Sap Ticket for the Application Server.
 * You should register event handler for passing the return value.
 * If the new ticket is generated normally, the return value is “stat=ok&ticket=686a8281-e952-4dcc-a67b-57e8f92e5530”
 * Otherwise, it is “stat=fail&ticket=null”.
 * (Since Samsung Smart TV version 3.037)
 */
Common.API.Widget.prototype.requestSapTicket = function() {};
