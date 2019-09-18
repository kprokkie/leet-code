/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let hash = {};

  function helper(n) {
    if (n === 1) {
      return true;
    }

    let r = n.toString().split('').map(Number).reduce((acc, val) => acc + val * val, 0);

    // cyclic check
    if (!hash[r]) {
      hash[r] = r;
      return helper(r);
    } else {
      return false;
    }
  }

  return helper(n);
};
