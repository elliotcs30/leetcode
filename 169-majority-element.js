/**
 * #169 Majority Element
 */

/**
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 *
 * You may assume that the array is non-empty and the majority element always exist in the array.
 *
 * 題目翻譯：
 * 長度為n的陣列，找出一個出現n/2次以上的主要元素，假設陣列不會是空值，而且總是會有主要元素存在陣列中。
 */

/**
 * Example 1:
 * 
 * Input: nums = [3, 2, 3]
 * Output: 3
 */

/**
 * Example 2:
 * 
 * Input: nums = [2, 2, 1, 1, 1, 2, 2]
 * Output: 2
 */

const majorityElement = nums => {
  let map = {}
  if (nums.length === 1) return nums[0]

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1
    } else {
      map[nums[i]]++
      if (map[nums[i]] >= nums.length / 2) return nums[i]
    }
  }
}
