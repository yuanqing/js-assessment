exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return _.reduce(arr, function(sum, x) {
      return sum + x;
    }, 0);
  },

  remove : function(arr, item) {
    return _.reduce(arr, function(result, x) {
      if (x !== item) { // strict
        result.push(x);
      }
      return result;
    }, []);
  },

  removeWithoutCopy : function(arr, item) {
    var i = -1;
    var len = arr.length;
    while (++i < len) {
      if (arr[i] === item) { // strict
        arr.splice(i, 1); // `splice` mutates the `arr`
        len--;
        i--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    var len = arr.length;
    arr.splice(len-1, 1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2); // `concat` always returns a new array
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return _.reduce(arr, function(sum, x) {
      return sum + (x === item ? 1 : 0);
    }, 0);
  },

  duplicates : function(arr) {
    var soFar = [];
    // would be nice to have a hash table where keys can be arbitary objects
    // so that checking for existence if O(1). JS doesn't have this, so we use
    // an array. `indexOf` is O(n) where `n` is the array size.
    return _.reduce(arr, function(results, x) {
      if (soFar.indexOf(x) === -1) { // ie. not encountered `x` before
        soFar.push(x);
      } else {
        if (results.indexOf(x) === -1) { // ie. `x` is already a duplicate
          results.push(x);
        }
      }
      return results;
    }, []);
  },

  square : function(arr) {
    // this should be a `map`, but of course `reduce` can be a `map` too!
    return _.reduce(arr, function(results, x) {
      results.push(x * x);
      return results;
    }, []);
  },

  findAllOccurrences : function(arr, target) {
    // should use a `map`, but `reduce` can be a `map` too!
    return _.reduce(arr, function(results, x, i) {
      if (x === target) {
        results.push(i);
      }
      return results;
    }, []);
  }

};
