/**
 * #168 Excel Sheet Column Title
 */

/**
 * Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
 *
 * For example:
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28 
...
 */

/**
 * Example 1:
 * 
 * Input: columnNumber = 1
 * Output: "A"
 */

/**
 * Example 2:
 * 
 * Input: columnNumber = 28
 * Output: "AB"
 */

/**
 * Example 3:
 * 
 * Input: columnNumber = 701
 * Output: "ZY"
 */

const convertToTitle = n => {
  // String.fromCharCode(65) = 'A'， String.fromCharCode(66) = 'B' ..... String.fromCharCode(90) = 'Z'

  // 比27小的時候，可以直接用String.fromCharCode(n)轉換成英文字母
  if (n-1 < 26) return String.fromCharCode(65 + (n-1) % 26)

  let result = ""

  while (n > 0) {
    let codeNum = (n-1) % 26
    let c = String.fromCharCode(codeNum + 65)
    result = c + result

    n = parseInt((n-1) / 26)
  }
  return  result
}