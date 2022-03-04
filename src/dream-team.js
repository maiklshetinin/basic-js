const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false
  let res = []
  arr.forEach(element => {
    if (typeof (element) === 'string') {
      for (i = 0; i < element.length; i++) {
        let letter = element[i]
        if (letter !== ' ') return res.push(letter.toUpperCase())
      }
    }
  });
  return res.sort().join('')
}

module.exports = {
  createDreamTeam
};
