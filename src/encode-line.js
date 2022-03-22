const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let counter = 0
  let res = ''
  for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
          counter += 1
      } else if (str[i] === str[i - 1]) {
          counter += 1
          res += counter + str[i]
          counter = 0
      } else if (str[i] !== str[i + 1]) {
          res += str[i]
      }
  }
  return res
}

module.exports = {
  encodeLine
};
