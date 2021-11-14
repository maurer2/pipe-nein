/** @typedef {object} json
 * @property {string} name
 * @property {string} version
 * @property {number} lockfileVersion
 * @property {boolean} requires
 * @property {object} dependencies
 */
const packageLockFile = require('./package-lock.json')
const {lockfileVersion} = packageLockFile

console.log(lockfileVersion)
process.exitCode = 0;
