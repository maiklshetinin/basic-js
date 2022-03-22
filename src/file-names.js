const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let res = []
  let i = 0
  for (let el of names) {
    if (!res.includes(el)) {
      res.push(el)
    } else if (res.includes(el)) {
      let dublicate = el + `(${i + 1})`
      if (res.includes(dublicate)) {
        i += 1
        dublicate = el + `(${i + 1})`
        res.push(dublicate)
      } else {
        res.push(dublicate)
      }
    }
  }
  return (res)
}

module.exports = {
  renameFiles
};
