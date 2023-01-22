/**
 * #125 Valid Palindrome
 */

/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * 
 * Given a string s, return true if it is a palindrome, or false otherwise..
 *
 * 題目翻譯：
 * 給一個字串，不考慮大小寫與非字母數字的情況下，判斷這個字串是不是迴文。
 */

/**
 * Example 1:
 * 
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * 
 * Explanation: 
 * "amanaplanacanalpanama" is a palindrome.
 */

/**
 * Example 2:
 * 
 * Input: s = "race a car"
 * Output: false
 * 
 * Explanation: 
 * "raceacar" is not a palindrome.
 */

/**
 * Example 3:
 * 
 * Input: s = " "
 * Output: true
 * 
 * Explanation: 
 * s is an empty string "" after removing non-alphanumeric characters.
 * Since an empty string reads the same forward and backward, it is a palindrome.
 */


/**
 * 首先把字串轉為全小寫
 * 將字串裡面不是字母與數字的部分去除
 * 反轉字串判斷與上一個步驟處理過的字串相等
 */

// 寫法1
// const isPalindrome = str => {
//   //轉小寫
//   str = str.toLowerCase()
//   //取代非文字部分
//   str = str.replace(/[^a-z0-9]/ig, "")
//   //反轉
//   let reverseStr = str.split("").reverse().join("")
//   //判斷反轉後是否與之前處理過的字串相等
//   return str.indexOf(reverseStr) === 0
// }

// 寫法 2
var isPalindrome = function(s) {
  var i = 0
  var j = s.length - 1
  var m = ''
  var n = ''
  while (i < j) {
    m = s[i].toLowerCase()
    n = s[j].toLowerCase()
    if (!isLetterOrDigit(m)) i++
    else if (!isLetterOrDigit(n)) j--
    else if (m === n) { 
      i++
      j--
    }
    else return false
  }
  return true
}

var isLetterOrDigit = function (c) {
  return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')
}
