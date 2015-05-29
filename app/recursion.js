exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var isDir = function(x) {
      return typeof x !== 'string';
    };
    // get the directory to traverse
    data = dirName ? _.find(data.files, function(x) {
      return isDir(x) && x.dir === dirName;
    }) : data;
    return (function list(data) {
      return _.reduce(data.files, function(acc, x) {
        if (isDir(x)) {
          return acc.concat(list(x));
        }
        acc.push(x);
        return acc;
      }, []);
    })(data);
  },

  permute: function permute(arr) {
    // base case
    if (arr.length < 2) {
      return [arr];
    }
    // recursive case: `permute` rest of array (index 1 and up), insert
    // `firstItem` at every location
    var firstItem = arr.splice(0, 1)[0];
    // mutates `arr` and returns the items that were removed
    var permutations = permute(arr);
    return _.reduce(permutations, function(result, permutation) {
      var i = -1;
      var len = permutation.length + 1; // need to insert at the end too
      while (++i < len) {
        var copy = [].concat(permutation);
        copy.splice(i, 0, firstItem);
        result.push(copy);
      }
      return result;
    }, []);
  },

  fibonacci: (function() {
    var memo = [1, 1];
    return function aux(n) {
      if (n < 2 || memo.length >= n) {
        return memo[n-1];
      }
      return aux(n-2) + aux(n-1);
    };
  })(),

  validParentheses: function(n) {
    return (function aux(l, r, curr, acc) {
      if (l === 0 && r === 0) {
        acc.push(curr);
      }
      if (l > 0) {
        aux(l - 1, r + 1, curr + '(', acc);
      }
      if (r > 0) {
        aux(l, r - 1, curr + ')', acc);
      }
      return acc;
    })(n, 0, '', []);
  }

};
