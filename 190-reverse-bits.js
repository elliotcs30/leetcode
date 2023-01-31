/**
 * #190 Reverse Bits
 */

/**
 * Reverse bits of a given 32 bits unsigned integer.
 * 
 * Note：
 * Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
 * 
 * In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
 * 
 * 進階：
 * 如果這個function會被呼叫很多次，要怎麼做最佳化?
 * 
 * 想法：
 * 用除法將十進位數字轉換成二進位數字，也就是bits，將轉換後的二進位數字反轉，再轉回整數。
 */

/**
 * Example 1:
 * 
 * Input: n = 00000010100101000001111010011100
 * Output:    964176192 (00111001011110000010100101000000)
 * 
 * Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
 */

/**
 * Example 2:
 * 
 * Input: n = 11111111111111111111111111111101
 * Output:   3221225471 (10111111111111111111111111111111)
 * 
 * Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.
 */


/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function(n) {
    if(n == 0) return 0
    // 用一個list將n轉為2進位的bits array
    let list = []

    for (let i = 0 ; i < 32 ; i++) {
        if (n > 0) {
            // 從低位數開始轉換為2進位，放進list時就已經完成反轉的動作
            // ex. 6轉換為2進位為110 ( 6 => 6%2 = 0 ， 3%2 = 1 , 1%2 =1 ) 
            list.push(parseInt(n % 2))
            n = parseInt(n / 2);
        } else {
            list.push(0)
        }
    }

    // 將bits array轉換成整數回傳
    return parseInt(list.join(""), 2)
}