/**
 * #20 Valid Parentheses
 */

/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 * 
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 *
 * 題目翻譯：
 * 給予都是括號所組成的字串，判斷小括號、中括號、大括號是不是成對的，只要是字串內的括號都是成對的就回傳true，如果有一個不是成對的就回傳false。
 */

/**
 * Example 1:
 * 
 * Input: s = "()"
 * Output: true
 */

/**
 * Example 2:
 * 
 * Input: s = "()[]{}"
 * Output: true
 */

/**
 * Example 3:
 * 
 * Input: s = "(]"
 * Output: false
 */

/**
 * 1. 首先對字串去跑迴圈，遍歷每個字元出來
 * 2. 再來要比對 "{", "[", "(" 這些開頭的括號
 * 3. 把開頭括號先存進一個暫存的 Array 裡面
 * 4. 當遇到 "}", "]", ")" 結尾括號的時候就去把剛剛暫存的 Array 最後的括號取出來比較
 * 5. 若比較錯誤就直接回傳 false, 如果對了就繼續比較
 * 6. 最後暫存 Array 長度為零的時候，就代表全部比較都成功，回傳 true
 */

const isValid = (str) => {
  const arr = []
  const map = {
    "}": "{",
    ")": "(",
    "]": "[",
  }  
  for (let item of str) {
    if (item === '{' || item === '(' || item === '[') {
      arr.push(item)
    } else {
      if (arr.pop() !== map[item]) return false
    }
  }
  return arr.length === 0
}
