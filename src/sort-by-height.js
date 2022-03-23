const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let res = []
  let ind = arr.reduce(function (arr, el, i) {
      if (el === -1) {
          arr.push(i)
      }
      return arr
  }, []);
  for (let el of arr) {
      if (el !== -1) res.push(el)
  }
  res.sort((a,b)=>a-b)
  for (let i = 0; i < ind.length; i++) {
      let index = ind[i]
      res.splice(index, 0, -1)
  }
  return res
}

module.exports = {
  sortByHeight
};
