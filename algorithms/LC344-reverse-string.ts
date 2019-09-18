/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    return s.reverse();
};

/**
 * Runtime: 104 ms, faster than 94.31% of JavaScript online submissions for Reverse String.
 * Memory Usage: 46.7 MB, less than 86.67% of JavaScript online submissions for Reverse String.
 */

const s = ["h","e","l","l","o"];
reverseString(s); // [ 'o', 'l', 'l', 'e', 'h' ]
