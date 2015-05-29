exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {

  valueAtBit: function(num, bit) {
    var mask = Math.pow(2, bit - 1); // -1
    // eg.
    //   2^(1 - 1) =   1
    //   2^(2 - 1) =  10
    //   2^(3 - 1) = 100
    return (num & mask) === mask ? 1 : 0;
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var result = [0, 0, 0, 0, 0, 0, 0, 0];
    var i = 7;
    while (num !== 0) {
      var remainder = num % 2;
      num = Math.floor(num / 2);
      result[i--] = remainder;
    }
    return result.join('');
  },

  multiply: function(a, b) {
    // we should of course use a well-tested library, but the following
    // works if we make some assumptions on `a` and `b`
    var split = function(x) { // split `x` into 2 numbers
      if (x > 1) {
        return [x, 1];
      }
      var fractionsStr = (b + '').substring(2);
      var numDigits = Math.ceil(fractionsStr.length, 16);
      var fractions = parseInt(fractionsStr, 10);
      return [fractions, Math.pow(10, numDigits)];
    };
    var x = split(a);
    var y = split(b);
    return (x[0] * y[0]) / (x[1] * y[1]);
  }

};
