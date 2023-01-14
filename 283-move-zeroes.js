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
 * 1. 由上方可觀察出陣列中的數字由大到小排列, 再將 0 靠右排列
 * 2. 因此我們可以使用陣列取出兩兩數值做比對
 * 3. 如果前面數值比後面大, 就前後交換
 * 4. 
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length - x; i++) {
    if (nums[i] === 0) {
      nums.push(parseInt(nums.splice(i, 1).join('')));
      i--;
      x++;
    }
  }
  return nums;
};
