/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums && !nums.length)
    return;

  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[count] !== nums[i]) {
      nums[++count] = nums[i];
    }
  }
  return ++count;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);
