const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let res = []
  for (i=0;i<matrix.length;i++) {
      let el=matrix[i]
      if (matrix.indexOf(el) === 0) {
          el.forEach(element => { res.push(element) })
      }else{
          let last=matrix[i-1]
         el.forEach((element,index)=>{
             if(last[index]!==0){
                 res.push(element)
             }
         })    
      }
  }  
  return(res.reduce((a,b)=>a+b))
}

module.exports = {
  getMatrixElementsSum
};
