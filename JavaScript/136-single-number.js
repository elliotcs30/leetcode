/**
 * #136 Single Number
 */

/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * 
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *
 * 題目翻譯：
 * 一個陣列中，每個元素會出現兩次，找到只出現一次的元素
 * 可使用 XOR的概念 : 相同為0, 相異為1
 */

/**
 * Example 1:
 * 
 * Input: nums = [2, 2, 1]
 * Output: 1
 */

/**
 * Example 2:
 * 
 * Input: nums = [4, 1 ,2, 1, 2]
 * Output: 4
 */

/**
 * Example 3:
 * 
 * Input: nums = [1]
 * Output: 1
 */

/**
 * XOR: 相同為0, 相異為1 (a ^ b = 1)
 * -------------------
 * | a | b | a XOR b |
 * | 0 | 0 |    0    |
 * | 0 | 1 |    1    |
 * | 1 | 0 |    1    |
 * | 1 | 1 |    0    |
 * -------------------
 * 
 *  9  (00000000000000000000000000001001)
 * 14  (00000000000000000000000000001110)
 * 
 * 14 ^ 9
 *  7  (00000000000000000000000000000111)
 */

const singleNumber = nums => {
  let res = 0
  let len = nums.length
  for (let i = 0; i < len; i++) {
    res ^= nums[i]
  }
  return res
}