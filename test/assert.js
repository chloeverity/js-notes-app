var assert = {
  isEqualTo: function(argumentOne, argumentTwo) {
    if (argumentOne !== argumentTwo) {
      throw new Error(`Assertion failed: ${argumentOne} does not equal ${argumentTwo}`)
    } else {
      console.log('.')
    }
  },
  isInstanceOf: function(argumentOne, argumentTwo) {
    if (argumentOne instanceof argumentTwo) {
      console.log('.')
    } else {
      throw new Error(`Assertion failed: ${argumentOne} is not an instance of ${argumentTwo}`)
    }
  },
  includes: function(argumentOne, argumentTwo) {
    if (argumentOne.includes(argumentTwo)) {
      console.log('.')
    } else {
      throw new Error(`Assertion failed: ${argumentOne} does not include ${argumentTwo}`)
    }
  },
}
