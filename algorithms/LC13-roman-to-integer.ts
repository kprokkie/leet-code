/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let hash = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let stack = [];
  for (let char of s) {
    let length = stack.length;
    if (!length || stack[length - 1] >= hash[char]) {
      stack.push(hash[char]);
    } else {
      stack[length - 1] = hash[char] - stack[length - 1];
    }
  }
  return stack.reduce((a, b) => a + b);
};

let s = 'MCMXCIV';
//s = 'III';
romanToInt(s);
