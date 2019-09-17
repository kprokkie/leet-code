/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

  let hash = {}; // SC: O(n)

  // TC: O(n)
  nums.forEach((num) => {
    if (!hash[num]) {
      hash[num] = true;
    }
  });

  // TC: O(n)
  for (let i = 0; i <= nums.length; i++) {
    if (!hash[i]) {
      return i;
    }
  }

};
// SC: O(n)
// TC: O(n+n) ~ O(2n) ~ O(n)

/*
Runtime: 68 ms, faster than 45.79% of JavaScript online submissions for Missing Number.
Memory Usage: 37.4 MB, less than 25.72% of JavaScript online submissions for Missing Number.
*/

// Approach 2 
// Gauss approach: n(n+1)/2
var missingNumberGauss = function(nums) {
  let expectedSum = nums.length * (nums.length + 1) / 2;
  let actualSum = nums.reduce((acc, val) => acc + val);
  return expectedSum - actualSum;
};

// SC: O(1)
// TC: O(n)

/*
Runtime: 60 ms, faster than 78.21% of JavaScript online submissions for Missing Number.
Memory Usage: 36.1 MB, less than 77.14% of JavaScript online submissions for Missing Number.
*/

// Approach 3
// Sort
var missingNumberSort = function(nums) {
  nums.sort(); // TC: O(n logn)
  console.log(nums);
  // loop to match with index
};


const arr1 = [3, 0, 1]; // Output: 2
const arr2 = [9, 6, 4, 2, 3, 5, 7, 0, 1]; // Output: 8

const arr3 = [8, 6, 4, 2, 3, 5, 7, 0]; // 1

const arr4 = [0]; // 1

missingNumber(arr2);
