/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let hash = {};
  let counter = 0;
  for (let char of s) {
    if (!hash[char]) {
      hash[char] = {index: counter, count: 1};
    } else {
      hash[char].count += 1;
    }
    counter++;
  }

  for (let val of Object.values(hash)) {
    if (val.count === 1) {
      return val.index;
    }
  }

  return -1;

};

const s1 = "lleettccoodde"; // -1
const s2 = "loveleetcode"; // 2

firstUniqChar(s2);
