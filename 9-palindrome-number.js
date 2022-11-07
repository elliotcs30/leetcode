/**
 * #9 Palindrome Number
 */

/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 *
 * 題目翻譯：
 * 給予一個整數 x，如果 x 是一個回文的話，回傳 true，否則回傳 false。
 */

/**
 * Example 1:
 * 
 * Input: x = 121
 * Output: true
 * 
 * Explanation: 
 * 121 reads as 121 from left to right and from right to left.
 */

/**
 * Example 2:
 * 
 * Input: x = -121
 * Output: false
 * 
 * Explanation:
 * From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 */

/**
 * Example 3:
 * 
 * Input: x = 10
 * Output: false
 * 
 * Explanation:
 * Reads 01 from right to left. Therefore it is not a palindrome.
 */

/**
 * 回傳 x 的判斷式：
 * a = x 的反轉後字串
 * b = x 的初始字串
 * return a === b
 */

const isPalindrome = function(x) {
  if (x < 0) return false
  
    let number = x
    let reverse = 0
    while (number > 0) {
      reverse = reverse * 10 + number % 10
      number = parseInt(number / 10)
    }
    
    return x === reverse
}