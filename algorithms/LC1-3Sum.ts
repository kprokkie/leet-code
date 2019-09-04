var twoSum = function (nums, target) {
    let hashTable = {};
    nums.forEach((num, index) => {
        hashTable[num] = index;
    });

    for (let i = 0; i < nums.length; i++) {
        let search = target - nums[i];
        if (typeof hashTable[search] !== 'undefined' && hashTable[search] !== i) {
            return [i, hashTable[search]];
        }
    }
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));