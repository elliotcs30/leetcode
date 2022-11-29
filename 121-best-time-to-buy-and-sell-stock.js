/**
 * #121 Best Time to Buy and Sell Stock
 */

/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * 
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * 
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
 * 
 * 題目翻譯：
 * 有一個陣列儲存i個數字，這些元素代表一天當中股票的價格。
 * 如果在一天中只能做一次交易(買一次然後賣一次)，設計一個演算法求得最大獲利。
 */

/**
 * Example 1:
 * 
 * Input: prices = [7, 1, 5, 3, 6, 4]
 * Output: 5
 * 
 * Explanation: 
 * Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */

/**
 * Example 2:
 * 
 * Input: prices = [7, 6, 4, 3, 1]
 * Output: 0
 * 
 * Explanation: 
 * In this case, no transactions are done and the max profit = 0.
 */

/**
 * 單一元素最大獲利 = 目前價錢 - 前面出現的最低價格
 * 跑迴圈計算每個元素可能出現的最大獲利是多少
 * 如果現在這個元素能的獲利比之前的最大獲利還大，取現在元素的獲利為最大獲利
 */

const maxProfit = prices => {    
  // min代表目前股票出現的最低價，一開始用MAX_SAFE_INTEGER表示無限大
  let min = Number.MAX_SAFE_INTEGER

  // 目前獲利
  let profit = 0

  for (let i = 0; i < prices.length; i++) {
    // 找出最低點買進
    if (prices[i] < min) min = prices[i]
    
    // 計算現在的價錢可以獲利多少
    let calProfit = prices[i] - min

    // 現在的價錢賣出是否可以獲得更高的獲利
    if(calProfit > profit) profit = calProfit
  }
  return profit
}