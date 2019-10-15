function MaxSumDigitSum(nums) {
  let hash = {};
  let sum = -1;
  for (let i = 0; i < nums.length; i++) {
    let digitSum = DigitSum(nums[i]);
    if (!hash[digitSum]) hash[digitSum] = nums[i];
    else {
      sum = Math.max(sum, hash[digitSum] + nums[i]);
      hash[digitSum] = Math.max(hash[digitSum], nums[i]);
    }
  }
  return sum;
}

function DigitSum(num) {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

const a = [51, 71, 17, 42]; // 93
const b = [42, 33, 60]; // 102
const c = [51, 32, 43]; // -1
MaxSumDigitSum(a);
MaxSumDigitSum(b);
MaxSumDigitSum(c);
