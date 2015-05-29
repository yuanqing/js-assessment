exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {

  async : function(value) {
    return {
      then: function(cb) {
        cb(value); // uh, just call the `cb` with `value`
      }
    };
  },

  manipulateRemoteData : function(url) {
    var then = function(cb) {
      $.get(url, function(data) {
        var names = _.pluck(data.people, 'name');
        cb(names.sort());
      });
    };
    return {
      then: then
    };
  }

};
