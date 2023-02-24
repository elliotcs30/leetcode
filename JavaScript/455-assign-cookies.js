/**
 * #455 Assign Cookies
 */

/**
 * Assume you are an awesome parent and want to give your children some cookies. 
 * But, you should give each child at most one cookie.
 * 
 * Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. 
 * 
 * If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content.
 * 
 * Your goal is to maximize the number of your content children and output the maximum number.
 * 
 * 
 * 翻譯:
 * 輸入一個陣列g，代表小孩對於餅乾的需求度；
 * 另一個陣列s，代表餅乾提供的需求度，求這些餅乾最多能滿足幾位小朋友。
 */

/**
 * Example 1:
 * 
 * Input: g = [1, 2, 3], s = [1, 1]
 * Output: 1
 * 
 * Explanation: 
 * You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
 * And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
 * You need to output 1.
 * 
 * 假設輸入的g = [1, 2, 3], s = [1, 1]
 * 只有 1 個餅乾能滿足需求度為 1 的小孩，所以答案為 1。
 */

/**
 * Example 2:
 * 
 * Input: g = [1, 2], s = [1, 2, 3]
 * Output: 2
 * 
 * Explanation: 
 * You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
 * You have 3 cookies and their sizes are big enough to gratify all of the children, 
You need to output 2.
 */

/**
 * 解題方法：
 * 使用貪婪法，將 g 和 s 都由小到大排序，每次都從最小需求度的小孩和餅乾開始比對，
 * 如果目前小孩的需求度無法滿足，就挑下一個餅乾。最終能計算有幾位小朋友得到餅乾。
 */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
let g = [1, 2, 3], s = [1, 1]

const findContentChildren = function(g, s) {
  g.sort((a, b) => a - b) // [ 1, 2, 3 ]
  s.sort((a, b) => a - b) // [ 1, 1 ]

  let count = 0

  for (let i = 0; i < s.length; i++) {
    if(g[count] <= s[i]) {
      // [1]    ,  [1]  V
      // [2]    ,  [1]  X

      count++ // 1, 
    }
  }
  
  return count
};