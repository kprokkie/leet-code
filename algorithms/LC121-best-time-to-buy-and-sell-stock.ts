/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  let CP = 0;
  let SP = 0;
  let isHold = false;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {

    if (isHold) {
      SP = prices[i];
      if (SP < CP) {
        isHold = false;
      } else {
        let tempProfit = SP - CP;
        profit = tempProfit > profit ? tempProfit : profit;
      }
    }

    if (!isHold && prices[i] < prices[i + 1]) {
      CP = prices[i];
      isHold = true;
    }
  }

  return profit;

};

// TC: O(n)
// SC: O(1)

/*
Runtime: 64 ms, faster than 50.03% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 35.3 MB, less than 85.19% of JavaScript online submissions for Best Time to Buy and Sell Stock.
*/

const arr1 = [7, 1, 5, 3, 6, 4]; // 5
const arr2 = [7, 6, 4, 3, 1]; // 0
const arr3 = [2, 1, 2, 1, 0, 1, 2]; // 2
const arr4 = [2, 1, 3, 1, 0, 1]; //2

maxProfit(arr4);
