const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  if(typeof(str)!=='string'){
    str=''+str
  }
  let add = []
  let res = []
  if (options.additionRepeatTimes||options.addition) {
      options.additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
    for (i = 0; i < options.additionRepeatTimes; i++) {
      if(typeof(options.addition)!=='string'){
        options.addition=''+options.addition
      }
      add.push(options.addition)
    }
  } 
  let strAddition = add.join(options.additionSeparator?options.additionSeparator:'|')
  console.log(strAddition)
  options.repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  for (j = 0; j < options.repeatTimes; j++) {
    res.push(str + strAddition)
  }
  return (res.join(options.separator ? options.separator : '+'))
}
module.exports = {
  repeater
};
