/**
 * #13 Roman to Integer
 */

/**
 * Given a roman numerals, convert it to an integer.
 *
 * Input is guaranteed to be within the range from 1 to 3999.
 *
 * 題目翻譯：
 * 給予一個羅馬數字符號，將之轉為整數，這個數字會落在 1 到 3999 之間。
 */

/**
 * Example 1:
 * 
 * Input: s = "III"
 * Output: 3
 * 
 * Explanation: 
 * III = 3
 */

/**
 * Example 2:
 * 
 * Input: s = "LVIII"
 * Output: 58
 * 
 * Explanation:
 * L = 50, V = 5, III = 3
 */

/**
 * Example 3:
 * 
 * Input: s = "MCMXCIV"
 * Output: 1994
 * 
 * Explanation:
 * M = 1000, CM = 900, XC = 90 and IV = 4
 */

/**
 * 使用一個 map 來儲存羅馬符號跟數字之間的對應關係，在一般的情況下(Ex: III, VI)，可以直接將羅馬符號轉換成數字。
 * 
 * 若出現 IV，XC 這種組合就要另外處理，這樣的組合是後面會大於前面的符號，因此一次讀兩個羅馬符號來找出這種組合。 一次讀兩個羅馬符號來找出這種組合。一次讀兩個羅馬數字，如果第二個數字(n2)比第一個(n1)大，整數值為n2-n1，如果是一般的情況 n2 <= n1，整數值為 n2+n1
 */

const romanToInt = function(s) {
  const map = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 }

  let sum = 0
  for (let i = 0; i < s.length; i++) {
    let v1 = map[s[i]]
    let v2 = map[s[i + 1]]

    if (v2 > v1) {
      sum = sum + v2 - v1
      i++
    } else {
      sum = sum + v1
    }
  }
  return sum
}