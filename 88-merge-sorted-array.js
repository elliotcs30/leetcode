/**
 * #88 Merge Sorted Array
 */

/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * 
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * 
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 *
 * 題目翻譯：
 * 給兩個已經排序過的整數陣列 nums1 與 nums2，將 nums2 合併入 nums1 之中。
 * 
 * nums1會有有足夠的空間可以塞入兩個陣列(nums1.length = m + n)，
 * m 為 nums1 的元素數量，n 為 nums2 的元素數量。
 * 
 * 範例： 
 * nums1 = [1, 1, 2, 4, 6, null, null, null], m = 5, 
 * nums2 = [2, 3, 7], n = 3
 * 合併後 nums1 = [1, 1, 2, 2, 3, 4, 6, 7]
 */

/**
 * Example 1:
 * 
 * Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
 * Output: [1, 2, 2, 3, 5, 6]
 * 
 * Explanation: 
 * The arrays we are merging are [1, 2, 3] and [2, 5, 6].
 * The result of the merge is [1, 2, 2, 3, 5, 6] with the underlined elements coming from nums1.
 */

/**
 * Example 2:
 * 
 * Input: nums1 = [1], m = 1, nums2 = [], n = 0
 * Output: [1]
 * 
 * Explanation: 
 * The arrays we are merging are [1] and [].
 * The result of the merge is [1].
 */

/**
 * Example 3:
 * 
 * Input: nums1 = [0], m = 0, nums2 = [1], n = 1
 * Output: [1]
 * 
 * Explanation:
 * The arrays we are merging are [] and [1].
 * The result of the merge is [1].
 * Note that because m = 0, there are no elements in nums1. 
 * The 0 is only there to ensure the merge result can fit in nums1.
 */

/**
 * 這題分成兩個步驟:
 * (1)先把 nums2 的值放到 nums1 裡面
ex. nums1 = [1, 2, 6, null, null] , nums2 = [4, 5] --> [1, 2, 6, 4, 5]
 * 然後將nums1裡面的元素重新排序 [1, 2, 4, 5, 6]
 */

const merge = function(nums1, m, nums2, n) {

  let index = 0
  
  // 將nums2裡面的值放在nums1
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[index]
    index++
  }

  // 使用泡沫排序法重新排序
  for (let j = 0; j < nums1.length - 1; j++) {
    for (let k = j + 1; k < nums1.length; k++) {
      if (nums1[j] > nums1[k]) {
        let temp = nums1[j]
        nums1[j] = nums1[k]
        nums1[k] = temp
      }
    }
  }
}
