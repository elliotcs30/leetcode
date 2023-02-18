/**
 * #70 Climbing Stairs
 */

/**
 * You are climbing a stair case. It takes n steps to reach to the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * 題目翻譯：
 * 假設正在爬一個階梯。到頂端總共需走n階。
 * 
 * 每次都可以選擇爬1階或2階，問有幾種不同的方法可以爬到階梯頂端。
 */

/**
 * Example 1:
 * 
 * Input: n = 2
 * Output: 2
 * 
 * Explanation: 
 * There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 */

/**
 * Example 2:
 * 
 * Input: n = 3
 * Output: 3

 * Explanation:
 * There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step 
 * 2. 1 step + 2 steps 
 * 3. 2 steps + 1 step
 */

/**
 * 這題是算費氏數列
 * n = 1， result = 1
 * n = 2, result = 1+1 (爬1階兩次 + 一次爬兩階)
 * n = 3, result = 1+2 (前面兩個case相加)
 * n = 4, result = 3+2 (前面兩個case相加)
 */

/**
 * @param {number} n
 * @return {number}
 */

const climbStairs = function(n) {
  if (n <= 1) {
    return 1
  }

  let prev = 1
  let cur  = 1
  // 費氏數列 f(n) = f(n-1) + f(n-2)
  for (let i = 2; i <= n; i++) {
    let temp = cur
    cur = cur + prev
    prev = temp
  }
  return cur
}