const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
  function getCommonCharacterCount(a, b) {
    let arr1 = a.split('')
    let arr2 = b.split('')
    let counter = 0
    for (i = 0; i < arr1.length; i++) {
        let letter = arr1[i]
        if (arr2.includes(letter)) {
            arr2.splice(arr2.indexOf(letter), 1)
            counter++
        }
    }
    return counter
}



module.exports = {
  getCommonCharacterCount
};
