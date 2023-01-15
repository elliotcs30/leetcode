/**
 * #283 Move Zeroes
 */

/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * 
 * Note that you must do this in-place without making a copy of the array..
 */


/**
 * Example 1:
 * 
 * Input: nums = [0, 1, 0, 3, 12]
 * Output: [1, 3, 12, 0, 0]
 */

/**
 * Example 2:
 * 
 * Input: nums = [0]
 * Output: [0]
 */

/**
 * 思路：
 * 1. 由題目中可以了解到此為一整數陣列, 將 0 移動到右側底端
 * 2. 設計當遇到 0 值時, 就將該數值移出陣列, 並將該數值放入陣列最後方
 * 3. 移出陣列的數值可使用 splice, 移入陣列可以使用 push 
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// let nums = [0, 1, 0, 3, 12]

const moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
    }
  }
  return nums
}