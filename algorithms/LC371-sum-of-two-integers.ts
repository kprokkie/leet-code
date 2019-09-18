/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  let sum = a;
  if (b > 0) {
    while (b) {
      sum++;
      b--;
    }
  } else {
    while (b) {
      sum--;
      b++;
    }
  }
  return sum;
};

getSum(1, 2);
