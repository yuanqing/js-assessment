exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
    if (!_.isNumber(num)) { // no number provided, or not a number
      return false;
    }
    var isDivisibleBy3 = num % 3 === 0;
    var isDivisibleBy5 = num % 5 === 0;
    if (isDivisibleBy3 && isDivisibleBy5) {
      return 'fizzbuzz';
    }
    if (isDivisibleBy3) {
      return 'fizz';
    }
    if (isDivisibleBy5) {
      return 'buzz';
    }
    return num; // otherwise return the number
  }
};
