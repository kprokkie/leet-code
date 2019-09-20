/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  
  let sHash = {};
  let tHash = {};

  // let sArr = [...s];
  // let tArr = [...t];

  // TC: O(n)
  for (let i = 0; i < s.length; i++) {
    sHash[s[i]] = ++sHash[s[i]] || 1;
    tHash[t[i]] = ++tHash[t[i]] || 1;
    // if (!sHash[sArr[i]])
    //   sHash[sArr[i]] = 1;
    // else
    //   sHash[sArr[i]] += 1;

    // if (!tHash[tArr[i]])
    //   tHash[tArr[i]] = 1;
    // else
    //   tHash[tArr[i]] += 1;
  }

  // TC: O(m)
  for (let key in sHash) {
    if (sHash[key] !== tHash[key])
      return false;
  }
  return true;
};

// Runtime: 76 ms, faster than 56.94% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 40 MB, less than 10.20% of JavaScript online submissions for Valid Anagram.

let s = "anagramb";
let t = "nagaranm";

isAnagram(s, t);
