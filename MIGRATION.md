# Migration from

## 0.5.x to 2.0.0

* Update config:
	* `widgetConfig` field must be renamed to `widget`;
	* `widgetServer` field must be renamed to `server`.

## 0.4.x to 0.5.x

* Run `zb.device.platforms.samsung.Storage.migrate` to migrate data from storage over FileSystem API to Web Storage, e.g.:

```javascript
onReady() {
	zb.device.platforms.samsung.Storage.migrate(app.device.storage, [
		zb.packageInfo.name,
		...otherPrefixesUsedInApplication
	]);
	
	// Don't forget to restore key prefix
	app.device.storage.setKeyPrefix(zb.packageInfo.name);
}
```

We recommend you perform migration only once to avoid overhead.

## 0.2.x to 0.3.x

* Replace `app.device.disableVolumeOSD()` to `app.device.enableVolumeOSD(false)`
* Replace `app.device.enableVolumeOSD()` to `app.device.enableVolumeOSD(true)`
* Run `app.device.enableVolumeOSD(false)` if you are using custom volume OSD
