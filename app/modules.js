exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
    var obj = {
      greeting: str1,
      name: str2,
      sayIt: function() {
        return obj.greeting + ', ' + obj.name;
      }
    };
    return obj;
  }
};
