const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  res: [],
  getLength() {
  },
  addLink(value) {
      if (typeof value === 'undefined') {
          this.res.push(' ')
      } else {
          this.res.push(value)
      }
      return this
  },
  removeLink(position) {
      if (typeof (position) !== 'number' || position > this.res.length || position === 0 || typeof (position) === 'string' || position < 0) {
          this.res.length = 0
          throw new Error("You can't remove incorrect link!")
      } else {
          this.res.splice(position - 1, 1)
      }
      return this
  },
  reverseChain() {
      this.res.reverse()
      return this
  },
  finishChain() {
      this.result = (this.res.map(el => `( ${el} )`).join('~~'))
      this.res.length = 0
      return this.result
  }
}

module.exports = {
  chainMaker
};
