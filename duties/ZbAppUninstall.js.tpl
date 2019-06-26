/**
 * @license
 * Copyright (C) 2015 interfaced http://interfaced.ru/
 */

var ZbAppUninstall = {
	/**
	 * Resetting values when application is uninstalled
	 */
	reset: function() {
		var fs = new FileSystem();

		fs.deleteCommonFile('<%=commonFileName%>/_storage');

		if (localStorage) {
			localStorage.clear();
		}
	}
};
