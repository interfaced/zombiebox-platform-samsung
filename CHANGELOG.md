# 2.1.1 (23.09.2019)

## Fixes
* Fix GCC warnings about @class usage.

# 2.1.0 (15.09.2019)

## Features
* Removed video container and updated to ZombieBox 2.1.
* Updated to ESLint 6.

# 2.0.0 (18.06.2019)

## Features
* Updated to ZombieBox 2.0.1.
* Removed `zb-platform-test` usage.
* Removed unused files.

## Fixes
* Fixed MAC-address detection.

# 1.0.0 (25.03.2019)

## Features
* Integrated zb-platform-test.
* Updated to ZombieBox 1.0.
* **#7429** Implemented `IVideo.getUrl` method.

## Fixes
* **#7406** Fixed delimiters returned from `IDevice.getMAC` method.

# v0.5.3 (12.04.2018)

## Fixes
* **#0000** Fixed play from position

# v0.5.2 (05.04.2018)

## Fixes
* **#5714** Prevent foreign time updates after loading started.

# v0.5.1 (26.12.2017)

## Features
* **#6167** Added unsupported feature error.

# v0.5.0 (24.11.2017)

## Features
* **#6491** Use Local storage. [BREAKING_BACK]

## Improvements
* **#6502** Update eslint and fix errors.

# v0.4.1 (04.10.2017)

## Fixes
* **#6389** Fixed adaptive stream freezing on resolution change.

# v0.4.0 (24.05.2017)

## Features
* **#6086** Implemented getting locale. See `Info#locale`.
* **#6062** Implemented getting launch params and environment. See `Device#getLaunchParams`, `Device#getEnvironment`.

## Fixes
* **#6146** **#5433** Fixed part of bundling problems.
* Fixed GCC warnings with disableVolumeOSD/enableVolumeOSD().

## Improvements
* **#6145** Renamed typedef to externs.

# v0.3.0 (10.03.2017)

## Features
* **#4600** Used method `Device#enableVolumeOSD` with arguments for enable/disable volume. :BREAKING:
* **#4600** Used volume osd by default. :BREAKING:

## Fixes
* **#6001** Fixed aspect ratio namespaces.
* **#5695** Fixed CROP aspect-ratio mode. Updating ViewPort when video info is ready.

# v0.2.2 (11.01.2017)

## Features
* **#5039** Added factory method `zb.device.platforms.samsung.factory.createDevice` for create Device instances. All global dependencies now located in factory method.
* **#5039** All *.es6 files renamed to *.js

# v0.2.1 (02.09.2016)

## Fixes
* **#4351** Wrong enable/disable screen saver method calling 

# v0.2.0 (27.07.2016)

## Features
* **#3993** Add ViewPort class which is responsible for managing display area sizes and aspect ratio
* **#4247** Implement getting current video url
* **#4421** Rename abstract Video class (zb.device.Video) to AbstractVideo (zb.device.AbstractVideo)
* **#4494** Transpiled client-side files to ES6

## Improvements
* **#4317** Removed call `_createViewPort()` method from Video constructor
* **#4502** Move calling parent class constructor to the top of child constructors
* **#4442** Change xml generation package (pretty output included)
