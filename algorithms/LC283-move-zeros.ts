/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    while (nums[i + count] === 0) {
      count++;
    }
    nums[i] = i + count < nums.length ? nums[i + count] : 0;
  }
  return nums;
};

// 2 
var moveZeroes2 = function(nums) {
  var idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      nums[i] = idx === i ? nums[i] : 0;
      idx++;
    }
  }
  return nums;
};

const nums = [0, 2, 0, 1, 0, 0, 0, 3, 1, 2, 0];
console.log(moveZeroes2(nums));
