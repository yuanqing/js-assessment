exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {

  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(nextStr) {
      return str + ', ' + nextStr;
    };
  },

  makeClosures : function(arr, fn) {
    return _.map(arr, function(x) {
      return function() {
        return fn(x);
      };
    });
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments : function() {
    return _.reduce(arguments, function(sum, x) {
      return sum + x;
    }, 0);
  },

  callIt : function(fn) {
    var remainingArgs = [].slice.call(arguments, 1);
    fn.apply(null, remainingArgs);
  },

  partialUsingArguments : function(fn) {
    var initialArgs = [].slice.call(arguments, 1);
    return function() {
      return fn.apply(null, initialArgs.concat([].slice.call(arguments)));
    };
  },

  curryIt : function(fn) {
    var numArgsNeeded = fn.length;
    var argsReceived = [];
    var curry = function(x) {
      argsReceived.push(x);
      if (argsReceived.length === numArgsNeeded) {
        return fn.apply(null, argsReceived);
      }
      return curry;
    };
    return curry;
  }

};
