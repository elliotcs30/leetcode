/**
 * #268 Missing Number
 */

/**
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 * 
 * 翻譯：
 * 給定一個包含[0, n]中 n 個數的陣列 nums, 找出[0, n]這個範圍內沒有出現在陣列中的那個數字
 */

/**
 * Example 1:
 * 
 * Input: nums = [3, 0, 1], n = 3
 * Output: 2
 * 
 * Explanation: 
 * n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
 * 
 * n = 3 因為有 3 這個數字，由此我們可以得知所有數字都是在 [0, 3] 範圍內。 
 * 2 是範圍內缺少的數字，因為他沒有出現在 nums 中。
 */

/**
 * Example 2:
 * 
 * Input: nums = [0, 1], n = 2
 * Output: 2
 * 
 * Explanation: 
 * n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 
 * 2 is the missing number in the range since it does not appear in nums.
 */

/**
 * Example 3:
 * 
 * Input: nums = [9, 6, 4, 2, 3, 5, 7, 0, 1], n = 9
 * Output: 8
 * 
 * Explanation: 
 * n = 9 since there are 9 numbers, so all numbers are in the range [0, 9]. 
 * 8 is the missing number in the range since it does not appear in nums.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// 解法1:
// const missingNumber1 = (nums) => {
// 	let len = nums.length
// 	if (len === 0) return 0
	
// 	result = 0
//   for (let i = 0; i <= len; i++) {
//       result += i
//   }

//   input = 0
//   for (let i = 0; i < len; i++) {
//       input += nums[i]
//   }
// 	return result - input
// }

// 解法2:
const missingNumber = (nums) => {
	let len = nums.length
	if (len === 0) return 0
	
	let result = 0

	for (let i = 0; i < len; i++) {
		result += nums[i] - i

    // 1: nums[0] = 3, i = 0, result = 3
    // 2: nums[1] = 0, i = 1, result = 2
    // 3: nums[2] = 1, i = 2, result = 1
    // nums[2] = 4, i = 3, 4 -3 = 1

	}
	return len - result // 3 - 1 = 2
}
