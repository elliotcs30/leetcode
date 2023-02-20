/**
 * #414 Third Maximum Number
 */

/**
 * Given an integer array nums, return the third distinct maximum number in this array. 
 * If the third maximum does not exist, return the maximum number.
 *
 * 題目翻譯：
 * 
 * 在一個 nums 的所有數字中，過濾掉相同的數字以後，找到第三大的數字。
 * 如果最終過濾完相同的數字後剩下數字不到三個，直接回傳最大的數字。
 */

/**
 * Example 1:
 * 
 * Input: nums = [3, 2, 1]
 * Output: 1
 * 
 * Explanation:
 * The first distinct maximum is 3.
 * The second distinct maximum is 2.
 * The third distinct maximum is 1.
 */

/**
 * Example 2:
 * 
 * Input: nums = [1, 2]
 * Output: 2
 * 
 * Explanation:
 * The first distinct maximum is 2.
 * The second distinct maximum is 1.
 * The third distinct maximum does not exist, so the maximum (2) is returned instead.
 */

/**
 * Example 3:
 * 
 * Input: nums = [2, 2, 3, 1]  // [2, 3, 1] // 排序 [3, 2, 1]
 * Output: 1
 * 
 * Explanation:
 * The first distinct maximum is 3.
 * The second distinct maximum is 2 (both 2's are counted together since they have the same value).
 * The third distinct maximum is 1.
 */

const nums = [1, 2, 2, 5, 3, 5]
/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function(nums) {
  nums = [...new Set(nums)].sort((a, b) => b - a)
  return nums.length < 3 ? Math.max(...nums) : nums[2]
}