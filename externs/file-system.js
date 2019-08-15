/**
 * @class
 */
function SamsungFileSystem() {}


/**
 * @param {string} path
 * @param {string} mode One of r,w,a,r+,w+,a+
 */
SamsungFileSystem.prototype.openCommonFile = function(path, mode) {};


/**
 * @param {SamsungFileSystemPointer} fp
 * @return {boolean}
 */
SamsungFileSystem.prototype.closeCommonFile = function(fp) {};


/**
 * @param {string} path
 * @return {boolean}
 */
SamsungFileSystem.prototype.deleteCommonFile = function(path) {};


/**
 * @param {?} path
 * @return {boolean}
 */
SamsungFileSystem.prototype.createCommonDir = function(path) {};

/**
 * @param {string} path
 * @return {boolean}
 */
SamsungFileSystem.prototype.deleteCommonDir = function(path) {};


/**
 * @param {string} path Path including a name of directory to confirm its existence
 * @return {number} 0 : JS function failed, 1 : valid, 2 : invalid
 */
SamsungFileSystem.prototype.isValidCommonPath = function(path) {};


/**
 * Method openCommonFile() enables files to input and output in common area of all applications,
 * on the other hand, openFile() is only able to ‘read’ files in directory where an application is installed.
 *
 * @param {string} path
 * @param {string} mode r : Open a file for reading. The file must exist. Only r mode is available.
 * @param {*=} arg
 * @return {SamsungFileSystemPointer}
 */
SamsungFileSystem.prototype.openFile = function(path, mode, arg) {};


/**
 * Array of files.
 * File item like this one:
 *     name : file name
 *     isDir : If a file is a directory true, if not false
 *     size : File Size (byte)
 *     atime : The time when to open a file or access time to a directory with cd command
 *     mtime : The time when file contents are changed
 *     ctime : The time when file information is changed. If there is no directoryPath, return false.
 *
 * @param {string} directoryPath
 * @return {Array<{
 *     name: string,
 *     isDir: boolean,
 *     size: number,
 *     atime: string,
 *     mtime: string,
 *     ctime: string
 * }>}
 */
SamsungFileSystem.prototype.readDir = function(directoryPath) {};


/**
 * Internal class.
 * @param {string} path
 * @class
 */
function SamsungFileSystemPointer(path) {}


/**
 * Returns a line ranging to line feed character as a result. If there is nothing to read, return null.
 * @return {string}
 */
SamsungFileSystemPointer.prototype.readLine = function() {};


/**
 * @param {string} text
 * @return {boolean}
 */
SamsungFileSystemPointer.prototype.writeLine = function(text) {};


/**
 * @return {string} whole contents of the file
 */
SamsungFileSystemPointer.prototype.readAll = function() {};


/**
 * @param {string} text
 * @return {boolean}
 */
SamsungFileSystemPointer.prototype.writeAll = function(text) {};
