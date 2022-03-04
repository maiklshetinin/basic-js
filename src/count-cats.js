const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(arr) {
  let stack = []
  for (i = 0; i < arr.length; i++) {
    let sub = arr[i]
    sub.forEach(el => {
      if (el === '^^') stack.push(el)
    });
  }
  return stack.length
}
module.exports = {
  countCats
};
