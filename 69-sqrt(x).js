/**
 * #69 Sqrt(x)
 */

/**
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
 * The returned integer should be non-negative as well.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * You must not use any built-in exponent function or operator.
 * 
 *
 * 題目翻譯：
 * 給予一個非負整數 x，返回 x 的平方根，向下捨入到最接近的整數。
 * 返回的整數也應該是非負數。
 * 
 * 假設每個輸入都有一個解，但不能使用相同的元素。
 * 
 * 不得使用任何內置的指數函數或運算符。
 */

/**
 * Example 1: 
 * 
 * Input: x = 4
 * Output: 2
 * 
 * Explanation: 
 * The square root of 4 is 2, so we return 2.
 */

/**
 * Example 2:
 * 
 * Input: x = 8
 * Output: 2
 * 
 * Explanation: 
 * The square root of 8 is 2.82842..., 
 * and since we round it down to the nearest integer, 2 is returned.
 */

const mySqrt = function(x) {
  let left = 1
  let right = x

  // 若為 0, 1 的平方根就是自己
  if(x < 2) return x

  // 使用二分法來查找平方根或最接近平方根的整數
  while(left < right) {
    // 先找到左、右之間的中間點
    const mid = Math.floor((left + right) / 2)

    // 如果這是平方根，則返回中間點
    if (mid * mid === x) return mid
    // 如果 mid 平方大於 x 則答案必須在 mid 的左半邊
    else if (mid * mid > x) right = mid
    // 如果 mid 平方小於 x 則答案必須在 mid 的右半邊
    else left = mid + 1
  }
  return left - 1
}