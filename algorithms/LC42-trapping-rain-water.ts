/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    if (height.length <= 2) return 0;
      
    let water = 0;
    let leftMax = [];
    let rightMax = [];
    let length = height.length;

    leftMax[0] = height[0];
    for (let i = 1; i < length; i++) {
      leftMax[i] =  Math.max(height[i], leftMax[i-1]);
    }

    rightMax[length - 1] = height[length - 1];
    for (let j = length - 2; j >= 0; j--) {
      rightMax[j] =  Math.max(height[j], rightMax[j+1]);
    }

    for (let k = 0; k < length; k++) {
      water += Math.min(leftMax[k], rightMax[k]) -  height[k];
    }

  return water;
};


const height = [0,1,0,2,1,0,1,3,2,1,2,1]; // Output: 6
trap(height);
