exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var i = -1;
    var result = [];
    var key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push(key + ': ' + obj[key]);
      }
    }
    return result;
  }
};
