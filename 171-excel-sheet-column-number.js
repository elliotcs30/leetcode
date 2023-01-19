/**
 * #171 Excel Sheet Column Number
 */

/**
 * Related to question Excel Sheet Column Title.
 *
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 * 
 * 題目翻譯：
 * 將Excel欄位轉換成數字。
 * 
 * For example:
 * 
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * z -> 26
 * AA -> 27
 * AB -> 28
 */

/**
 * Example 1:
 * 
 * Input: columnTitle = "A"
 * Output: 1
 */

/**
 * Example 2:
 * 
 * Input: columnTitle = "AB"
 * Output: 28
 */

/**
 * Example 3:
 * 
 * Input: columnTitle = "ZY"
 * Output: 701
 */

/**
 * 參考思路：
 * 1. A - Z 總共 26 個字母，由此可知這是 26 進位的系統
 * 2. 將字串分別取出 A - Z，根據 ANSI CODE，A的code為65，A = 65 - 64 = 1
 * 3. 以 AB 為例，AB = (A)26^1 + (B)26^0 = 26 + 2 * 1 = 28
 * 4. 以 AZ 為例，AZ = (A)26^1 + (Z)26^0 = 26 + 26 * 1 = 52
 */

const titleToNumber = (s) => {
  let sum = 0
  let exp = 0

  for (let i = s.length -1; i >= 0; i--) {
    let v = s.charCodeAt(i) - 64
    v = v * Math.pow(26, exp++)
    sum += v
  }
  return sum
}