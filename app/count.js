exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var id = setInterval(function() {
      console.log(start++); // log the number, then increment
      if (start > end) {
        cancel(); // cancel when done
      }
    }, 100);
    var cancel = function() {
      clearInterval(id);
    };
    return {
      cancel: cancel
    };
  }
};
