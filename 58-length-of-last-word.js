/**
 * #58 Length of Last Word
 */

/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 *
 * A word is a maximal substring consisting of non-space characters only.
 *
 * 題目翻譯：
 * 給予一個有文字與空格的s字串，回傳最後字串的文字長度。
 * 
 * 單字是由非空格組成之字串。
 */

/**
 * Example 1:
 * 
 * Input: s = "Hello World"
 * Output: 5
 * 
 * Explanation: 
 * The last word is "World" with length 5.
 */

/**
 * Example 2:
 * 
 * Input: Input: s = "   fly me   to   the moon  "
 * Output: 4
 * 
 * Explanation: 
 * The last word is "moon" with length 4.
 */

/**
 * Example 3:
 * 
 * Input: Input: s = "luffy is still joyboy"
 * Output: 6
 * 
 * Explanation: The last word is "joyboy" with length 6.
 */

const s = "Hello World"

/**
 * 解法:
 * 運用.trim()移除字串中，字首前、字尾後的空白
 * 使用.split(‘ ‘)來將字串以空白做切割為陣列
 * 注意陣列與數列的關係
 */

const lengthOfLastWord = function(s) {
    const arr = s.trim().split(' ')
    return arr[arr.length - 1].length
}