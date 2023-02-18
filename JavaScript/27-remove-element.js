/**
 * #27 Remove Element
 */

/**
 * Given an array and a value, remove all instances of that value in place and return the new length.
 *
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 * 
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 * 
 * Example: Given input array nums = [3, 2, 2, 3], val = 3
 * 
 * Your function should return length = 2, with the first two elements of nums being 2.
 *
 * 題目翻譯：
 * 給予一個陣列跟一個數字，移除陣列中所有跟數字相同的元素。
 * 
 * 不可以使用另外的陣列來處理，全部的操作都要在同一個陣列中。
 * 
 * 陣列中的元素可以隨意排序。
 */

/**
 * Example 1:
 * 
 * Input: nums = [3, 2, 2, 3], val = 3
 * Output: 2, nums = [2, 2, _, _]
 * 
 * Explanation: 
 * Your function should return k = 2, with the first two elements of nums being 2.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 */

/**
 * Example 2:
 * 
 * Input: nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 3
 * Output: 5, nums = [0, 1, 4, 0, 3, _, _, _] 
 * 
 * Explanation:
 * Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
 * Note that the five elements can be returned in any order.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 */

/**
 * Example 3:
 * 
 * Input: nums = [3, 1, 2, 3, 2]， val = 3
 * Output: 3, nums = [1,2,2]
 * 
 * Explanation:
 * return 陣列的長度 3, 因為裡面的 3 被移除後剩下 [1, 2, 2]
 */

const nums = [3, 1, 2, 3, 2], val = 3

const removeElement = function(nums, val) {
  if(nums.length == 0) return nums.length
    if(nums.indexOf(val) < 0) return nums.length

    let count = 0
    for (let i = 0, max = nums.length; i < max; i++) {
        if(nums[i] !== val) {
            nums[count++] = nums[i]
        } 
    }
    return count
}
