/**
 * #67 Add Binary
 */

/**
 * Given two binary strings a and b, return their sum as a binary string.
 *
 * 題目翻譯：
 * 給兩個字元字串，回傳他們的總和(以字元字串回傳)。
 */

/**
 * Example 1:
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 */

/**
 * Example 2:
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 */

/**
 * 
 * 用純字串來處理，ex: "111"+"10"，先處理"11"+"10"
 * 個位數1+0=1; 十位數1+1=2，因為bits是二進位
 * 因此 2 -> 0，要回傳的字串為'10'
 * "111"最前面的"1"+剛才的進位1 = 2， 2-> 0， 會傳字串為'010'
 * 因為有進位，所以要把進位的1加到字串前面，最後回傳'1010'
 */

const addBinary = function (a, b) {
    // 使用字串來處理
    let sumStr = ""
    let carry = 0
    let longStr, shortStr

    // 判斷a,b哪個字串比較長
    if (a.length > b.length) {
        longStr = a
        shortStr = b
    } else {
        longStr = b
        shortStr = a
    }

    longStr = longStr.split("").reverse().join("")
    shortStr = shortStr.split("").reverse().join("")

    // 將短字串加到長字串裡面，這邊先計算到短字串的位數，ex. "110" + "1111"，這邊先處理 "110" + "111" 
    for(let i = 0; i < shortStr.length; i++) {
        let c = parseInt(shortStr.charAt(i))+parseInt(longStr.charAt(i)) + carry
        // 二進位，相加大於1，就要進位
        if(c > 1){
            carry = 1
            c = c % 2
        } else {
            carry = 0
        }

        sumStr = c + sumStr
    }

    // 處理長字串剩下的字串
    for (let j = shortStr.length; j < longStr.length; j++) {
        let c = parseInt(longStr.charAt(j)) + carry
        if (c > 1) {
            carry = 1
            c = c % 2
        } else {
            carry = 0
        } 
        sumStr = c + sumStr
    }

    // 如果加完後還有進位，要放到字串最前面
    return (carry == 1 ? carry : "") + sumStr
}