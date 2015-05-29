exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {

  containsNumber : (function() {
    var regex = /\d/;
    return function(str) {
      return regex.test(str);
    };
  })(),

  containsRepeatingLetter : (function() {
    var regex = /([a-zA-Z])\1/;
    return function(str) {
      return regex.test(str);
    };
  })(),

  endsWithVowel : (function() {
    var regex = /[aeiou]$/i;
    return function(str) {
      return regex.test(str);
    };
  })(),

  captureThreeNumbers : (function() {
    var regex = /(\d{3})/;
    return function(str) {
      var matches = str.match(regex);
      return matches ? matches[1] : false;
    };
  })(),

  matchesPattern : (function() {
    var regex = /^\d{3}-\d{3}-\d{4}$/;
    return function(str) {
      return regex.test(str);
    };
  })(),

  isUSD : (function() {
    var regex = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
    return function(str) {
      return regex.test(str);
    };
  })(),

};
