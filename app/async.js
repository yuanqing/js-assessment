exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {

  async : function(value) {
    return {
      then: function(cb) {
        setTimeout(function() {
          cb(value); // uh, just call the `cb` with `value`
        }, 0); // needed to defer calling of `cb`
      }
    };
  },

  manipulateRemoteData : function(url) {
    return {
      then: function(cb) {
        $.get(url, function(data) {
          var names = _.pluck(data.people, 'name');
          cb(names.sort());
        });
      }
    };
  }

};
