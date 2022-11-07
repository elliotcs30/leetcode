/**
 * #14 Longest Common Prefix
 */

/**
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 * 
 * If there is no common prefix, return an empty string "". 
 *
 * 題目翻譯：
 * 判斷陣列的字串中，找出最長的共同字串，否則回傳空值。
 */

/**
 * Example 1:
 * 
 * Input: strs = ["flower", "flow", "flight"]
 * Output: "fl"
 */

/**
 * Example 2:
 * 
 * Input: strs = ["dog", "racecar", "car"]
 * Output: ""
 * 
 * Explanation: There is no common prefix among the input strings.
 */

/**
 * 以陣列中第一組字串作為基準，互相比對字串是否連續相符
 * 如果相符放入 prefix 陣列，不相符及回傳當前的 prefix
 */

const longestCommonPrefix = function(strs) {
    if (!strs.length) return ""
    let prefix = ""
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length - 1; j++) {
            if (strs[j][i] !== strs[j+1][i]) return prefix;
        }
        prefix += strs[0][i]
    }
    return prefix
}
