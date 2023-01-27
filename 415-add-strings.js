/**
 * #415 Add Strings
 */

/**
 * Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
 *
 * Note:
 * The length of both num1 and num2 is < 5100.
 * Both num1 and num2 contains only digits 0-9.
 * Both num1 and num2 does not contain any leading zero.
 * You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

/**
 * Example 1:
 * 
 * Input: num1 = "11", num2 = "123"
 * Output: "134"
 */

/**
 * Example 2:
 * 
 * Input: num1 = "456", num2 = "77"
 * Output: "533"
 */

/**
 * Example 3:
 * 
 * Input: num1 = "0", num2 = "0"
 * Output: "0"
 */

const addStrings = function(num1, num2) {
  let len1 = num1.length
  let len2 = num2.length
  let max = Math.max(len1, len2)
  let res = Array(max)
  let carry = 0
  let val = 0

  for (let i = 0; i < max; i++) {
      val = Number(num1[len1 - 1 - i] || 0) + Number(num2[len2 - 1 - i] || 0) + carry
      carry = Math.floor(val / 10)
      res[max - 1 - i] = val % 10
  }

  return (carry || '') + res.join('')
}