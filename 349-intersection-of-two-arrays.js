/**
 * #349. Intersection of Two Arrays
 */

/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 *
 * 題目翻譯：
 * 尋找兩個陣列的交集，且要排除在陣列中出現同樣的數值。
 */

/**
 * Example 1:
 * 
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 */

/**
 * Example 2:
 * 
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 * 
 * Explanation: 
 * [4,9] is also accepted.
 */

/**
 * Example 3:
 * 
 * Input: nums = [3, 3], target = 6
 * Output: [0, 1]
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
  let result = []
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) result.push(nums1[i])
    }
  }
  return [...new Set(result)] // Array 刪除重複元素的方式
}