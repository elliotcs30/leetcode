/**
 * #205 Isomorphic Strings
 */

/**
 * Given two strings s and t, determine if they are isomorphic.
 * 
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * 
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 */

/**
 * Example 1:
 * 
 * Input: s = "egg", t = "add"
 * Output: true
 */

/**
 * Example 2:
 * 
 * Input: s = "foo", t = "bar"
 * Output: false
 */

/**
 * Example 3:
 * 
 * Input: s = "paper", t = "title"
 * Output: true
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
  let mapS = {}
  let mapT = {}

  for (let i in s) {
    let valueS = s[i]
    let valueT = t[i]

    if (!mapS[valueS]) {
      mapS[valueS] = valueT
    } else if (mapS[valueS] != valueT) { 
      return false
    }

    if (!mapT[valueT]) {
      mapT[valueT] = valueS
    } else if (mapT[valueT] != valueS) { 
      return false
    }
  }
  return true
}