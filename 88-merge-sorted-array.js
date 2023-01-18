/**
 * #88 Merge Sorted Array
 */

/**
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * 
 * The number of elements initialized in nums1 and nums2 are m and n respectively.
 * 
 * You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
 * 
 *
 * 題目翻譯：
 * 給兩個已經排序過的整數陣列 nums1 與 nums2，將 nums2 合併入 nums1 之中。
 * 
 * nums1 和 nums2 中初始化的元素個數分別為 m 和 n。
 * 假設 nums1 有足夠的空間（大小大於或等於 m + n ）來容納 nums2 中的其他元素。
 */

/**
 * Example 1:
 * 
 * Input: 
 * nums1 = [1, 2, 3, 0, 0, 0], m = 3
 * nums2 = [2, 5, 6],          n = 3
 * 
 * Output: [1, 2, 2, 3, 5, 6]
 * 
 * Explanation: 
 * The arrays we are merging are [1, 2, 3] and [2, 5, 6].
 * The result of the merge is [1, 2, 2, 3, 5, 6] with the underlined elements coming from nums1.
 */

/**
 * Example 2:
 * 
 * Input: 
 * nums1 = [1], m = 1, 
 * nums2 = [], n = 0
 * 
 * Output: [1]
 * 
 * Explanation: 
 * The arrays we are merging are [1] and [].
 * The result of the merge is [1].
 */

/**
 * Example 3:
 * 
 * Input: 
 * nums1 = [0], m = 0, 
 * nums2 = [1], n = 1
 * 
 * Output: [1]
 * 
 * Explanation:
 * The arrays we are merging are [] and [1].
 * The result of the merge is [1].
 * Note that because m = 0, there are no elements in nums1. 
 * The 0 is only there to ensure the merge result can fit in nums1.
 */

const merge = function(nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1
  while (j >= 0) {
    nums1[k--] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--]
  }
}
