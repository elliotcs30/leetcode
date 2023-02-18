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
 * 翻譯：
 * 
 * 給兩個字串 s, t 判斷他們是否是同構字。
 * 如果他們是同構字, 表示 s 裡面每個字元都可以拿來對應 t 的特定字元。
 * 全部的字元都要依順序來被取代, 而且 s 一種字元可會對應 t 的一種字元, 也可能對應到自己相同的字元。
 */

/**
 * 思路：
 * 1. 先比對 s 字串中有重複的字元, 將字元位置紀錄
 * 2. 再與 t 字串中有重複的字元位置做比對
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

let s = "foo", t = "bar"

const isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false

  let objectS = {}, objectT = {}

  for (let i = 0; i < s.length; i++) {
    if (objectS[s[i]] !== objectT[t[i]]) {
      return false
    } else {
      objectS[s[i]] = i
      objectT[t[i]] = i
    }
  }
  return true
}

// Input: s = "egg", t = "add"
// Output: true
// objectS['e'], objectT['a']
// {e: 0},       {a: 0},

// objectS['g'], objectT['d']
// {e: 0, g: 1}, {a: 0, d: 1},

// objectS['g'], objectT['d']
// {e: 0, g: 1}, {a: 0, d: 1}, // 1, 1

// Input: s = "foo", t = "bar"
// Output: false
// objectS['f'], objectT['b']
// {f: 0},       {b: 0},

// objectS['o'], objectT['a']
// {f: 0, o: 1}, {b: 0, a: 1},

// objectS['o'], objectT['r']
// {f: 0, o: 1}, {b: 0, a: 1}, // 1, undefined