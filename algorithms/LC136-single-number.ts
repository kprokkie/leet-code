/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let hash = {};
    nums.forEach((num) => {
        if (hash[num] === undefined) {
            hash[num] = num;
        } else {
            delete hash[num];
        }
    });
    return hash[Object.keys(hash)[0]];
};

const nums = [4, 1, 0, 0, 2, 1, 2, -5, 9, 9, -5];
console.log(singleNumber(nums));

/**
 * Runtime: 60 ms, faster than 71.54% of JavaScript online submissions for Single Number.
 * Memory Usage: 37 MB, less than 50.00% of JavaScript online submissions for Single Number.
 */