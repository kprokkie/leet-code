/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let c1 = 0;
let c2 = 0;
let median;

let sortedArr = [];
while (c1 < nums1.length && c2 < nums2.length) {
    if (nums1[c1] < nums2[c2]) {
        sortedArr.push(nums1[c1]);
        c1++;
    } else {
       sortedArr.push(nums2[c2]);
        c2++; 
    }
}

while(c1 < nums1.length) {
    sortedArr.push(nums1[c1]);
    c1++;
}

while(c2 < nums2.length) {
    sortedArr.push(nums2[c2]);
    c2++;
}

let length = sortedArr.length
if (length % 2 === 0) { // even
    median = (sortedArr[(length/2)-1] + sortedArr[length/2])/2;
} else {
    median = (sortedArr[(length-1)/2]);
}

return median;
};