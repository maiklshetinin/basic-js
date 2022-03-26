const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(isDirect = true) {
      this.type = isDirect
      this.abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  }
  encrypt(str, key) {
    console.log(str,key)
    if(typeof(str)!=='string'||typeof(key)!=='string') throw new Error('Incorrect arguments!'||arguments.length===0)
      let strArr = str.split(' ')
      let keyArr = []
      let keyWord = key.toLowerCase().split('')
      let result = ''
      for (let i = 0; i < strArr.length; i++) {
          let word = strArr[i]
          let strKey = ''
          for (let j = 0; j < word.length; j++) {
              let letter = word[j]
              if ((/[a-z]/gi).test(letter)) {
                  let keyLetter = keyWord.shift()
                  strKey += keyLetter
                  keyWord.push(keyLetter)
              } else {
                  strKey += letter
              }
          }
          keyArr.push(strKey)
      }
      let keyStr = keyArr.join(' ')
      for (let i = 0; i < str.length; i++) {
          let letterStr = str[i].toLowerCase()
          let letterKey = keyStr[i].toLowerCase()
          if ((/[a-z]/gi).test(letterStr)) {
              let letterCode = this.abc.findIndex(el => el === letterStr) + this.abc.findIndex(el => el === letterKey)
              let index = letterCode >= 26 ? letterCode - 26 : letterCode
              result += this.abc[index]
          } else {
              result += letterStr
          }
      }
      
      return this.type?(result.toUpperCase()):(result.toUpperCase().split('').reverse().join(''))
  }
  decrypt(str, key) {
    console.log(str,key)
    if(typeof(str)!=='string'||typeof(key)!=='string'||arguments.length===0) throw new Error('Incorrect arguments!')
      let strArr = str.split(' ')
      let keyArr = []
      let keyWord = key.toLowerCase().split('')
      let result = ''
      for (let i = 0; i < strArr.length; i++) {
          let word = strArr[i]
          let strKey = ''
          for (let j = 0; j < word.length; j++) {
              let letter = word[j].toLowerCase()
              if ((/[a-z]/gi).test(letter)) {
                  let keyLetter = keyWord.shift()
                  strKey += keyLetter
                  keyWord.push(keyLetter)
              } else {
                  strKey += letter
              }
          }
          keyArr.push(strKey)
      }
      let keyStr = keyArr.join(' ')
      for (let i = 0; i < str.length; i++) {
          let letterStr = str[i].toLowerCase()
          let letterKey = keyStr[i].toLowerCase()
          if ((/[a-z]/gi).test(letterStr)) {
              let letterCode = this.abc.findIndex(el => el === letterStr) - this.abc.findIndex(el => el === letterKey)
              let index = letterCode < 0 ? (26 - Math.abs(letterCode)) : letterCode
              result += this.abc[index]
          } else {
              result += letterStr
          }
      }
      return this.type?(result.toUpperCase()):(result.toUpperCase().split('').reverse().join(''))
  }
}

module.exports = {
  VigenereCipheringMachine
};
