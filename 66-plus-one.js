/**
 * #66 Plus One
 */

/**
 * original:
 * You are given a large integer represented as an integer array digits, where each digits[i] is the i(th) digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
 * 
 * Increment the large integer by one and return the resulting array of digits.
 *
 *
 * Ref:
 * Given a non-negative number represented as an array of digits, plus one to the number.
 *
 * The digits are stored such that the most significant digit is at the head of the list.
 *
 * 題目翻譯：
 * 給予一包含非整數的陣列，其中每一個值代表該位數的值，對這個陣列加1。
 */

/**
 * Example 1:
 * 
 * Input: digits = [1, 2, 3]
 * Output: [1, 2, 4]
 * 
 * Explanation: 
 * The array represents the integer 123.
 * Incrementing by one gives 123 + 1 = 124.
 * Thus, the result should be [1,2,4].
 */

/**
 * Example 2:
 * 
 * Input: nums = [4, 3, 2, 1]
 * Output: [4, 3, 2, 2]
 * 
 * Explanation: 
 * The array represents the integer 4321.
 * Incrementing by one gives 4321 + 1 = 4322.
 * Thus, the result should be [4,3,2,2].
 */

/**
 * Example 3:
 * 
 * Input: digits = [9]
 * Output: [1,0]
 * 
 * Explanation: 
 * The array represents the integer 9.
 * Incrementing by one gives 9 + 1 = 10.
 * Thus, the result should be [1,0].
 */

/**
 * 解法:
 * 陣列最後一位數 + 1，若有進位儲存進位值
 */

const plusOne = function (digits) {
    // 判斷最後一位數 +1 後是否需進位
    let carry = 0

    for (let i = digits.length - 1; i >= 0; i--) {
        // 目前位數 = 目前位數+前面是否進位
        digits[i]= digits[i] + carry

        // 最後一位元(個位數) + 1
        if (i === digits.length - 1) digits[i] = digits[i] + 1

        // 如果目前這個位數等於10(因為只+1，所以不會超過10)
        if (digits[i] == 10) {
          digits[i] = 0
          carry = 1
        } else {
          carry = 0
        }
    }

    // 有進位
    if (carry === 1) digits.unshift(carry)
    return digits
}
