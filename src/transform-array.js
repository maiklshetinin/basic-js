const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

 function transform(arr) {
    throw new NotImplementedError('Not implemented');
    if (!Array.isArray(arr)) throw new NotImplementedError(`'arr' parameter must be an instance of the Array!`);
    let res = [...arr]
    console.log(res)
    for (i = 0; i < res.length; i++) {
      if (res[i] === '--double-prev') {
        res[i] = res[i - 1]
      }
      else if (res[i] === '--double-next') {
        res[i] = res[i + 1]
      }
      else if (res[i] === '--discard-prev') {
        res.splice(res[i - 2], 2)
      }
      else if (res[i] === '--discard-next') {
        if (res[i + 2] === '--discard-prev') {
          res.splice(res[i - 1], 3)
        } else {
          res.splice(res[i - 1], 2)
        }
        i--
      } else if (res[i] === undefined) {
        res.splice(res[i - 1], 1)
      }
    }
    return (res)
  }

module.exports = {
  transform
};
