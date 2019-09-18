/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  function recursiveCall(n) {
    if (n === 1 || n === 2) {
      return n;
    }
    return recursiveCall(n - 1) + recursiveCall(n - 2);
  }
  return recursiveCall(n);
};

// climbStairs(4);
// climbStairs(45); // Time Limit Exceeded

var climbStairsMemo = function(n) {
  let hash = {};
  function recursiveCall(n) {
    let result;
    if (hash[n]) {
      result = hash[n];
    } else {
      if (n <= 2) {
        result = n;
      } else {
        result = recursiveCall(n - 1) + recursiveCall(n - 2);
        hash[n] = result;
      }
    }
    return result;
  }
  return recursiveCall(n);
};

/*
Runtime: 52 ms, faster than 68.99% of JavaScript online submissions for Climbing Stairs.
Memory Usage: 33.9 MB, less than 48.00% of JavaScript online submissions for Climbing Stairs.
*/

climbStairsMemo(5);
