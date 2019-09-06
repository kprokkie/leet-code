/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let CP = 0;
  let SP = 0;
  let profit = 0;
  let isHold = false;

  for (let i = 0; i < prices.length - 1; i++) {

    if (prices[i] < prices[i + 1] && !isHold) {
      CP = prices[i];
      isHold = true; // buy stock
    }

    if (prices[i] > prices[i + 1] && isHold) {
      SP = prices[i];
      isHold = false; // sell stock
    }

    // if up & down in stock 
    if (!isHold) {
      profit += SP - CP;
      CP = SP = 0;
    }
  }

  // only stock is going up
  if (isHold) {
    profit += prices[prices.length - 1] - CP;
  }

  return profit;
};

const prices1 = [7, 1, 5, 3, 6, 4]; // 7
const prices2 = [1, 2, 3, 4, 5]; // 4
const prices3 = [7, 6, 4, 3, 1]; // 0
const prices4 = [6, 1, 3, 2, 4, 7]; // 7
const prices5 = [3, 2, 6, 5, 0, 3]; // 7
maxProfit(prices5);
