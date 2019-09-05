/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]] += 1
      // special case 
      // majority element exceeds more than half
      // so there is no point to iterate whole
      if (hash[nums[i]] > Math.floor(nums.length / 2)) {
        return nums[i];
      }
    }
  }
  
  let temp = 0;
  let majorElement;
  for (const key in hash) {
    if (temp < hash[key]) {
      temp = hash[key];
      majorElement = key;
    }
  }
  return +majorElement;
};

const nums = [2, 2, 2, 1, 2, 2, 3, 3, 2, 1];
majorityElement(nums);
