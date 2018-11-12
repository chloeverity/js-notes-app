var assert = {
  isEqualTo: function(argumentOne, argumentTwo) {
    if (argumentOne !== argumentTwo) {
      throw new Error(`Assertion failed: ${argumentOne} does not equal ${argumentTwo}`)
    } else {
      console.log('.')
    }
  }
}
