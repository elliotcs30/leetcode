/**
 * #118 Pascal's Triangle
 */

/**
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 *
 * 題目翻譯：
 * numRows為列數，產生一個Pascal三角形，例如說 numRows = 5 ，產生三角形如上所示。
 */

/**
 * Example 1:
 * 
 * Input: numRows = 5
 * Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
 */

/**
 * Example 2:
 * 
 * Input: numRows = 1
 * Output: [[1]]
 */

/**
 * 每一列第一個值都是1
 * 每一列第n個值則是上一列 n-1 位子 +n 位子的值
 * 假如是該列最後一個值 Nx，前一列沒有 Nx 這個值，可以視為0
 * 有了以上規則，要算出毎一列的值就很簡單了，直接看下面程式碼
 */

const generate = numRows => {
    if(numRows === 0) return []

    // 放入第一列
    let trigle = [[1]]

    for (let i = 1; i < numRows; i++) {
        let prevRow = trigle[i-1] // 前一列
        let curRow  = [1]         // 每一列開始都是1

        for (let j = 1; j <= i; j++) {
            // 每一列的第 n 個值都是前一列 pre[n-1] + pre[n]
            let pre =  prevRow[j-1]
            let cur =  prevRow[j] ? prevRow[j] : 0
            curRow.push(pre + cur)
        }
        trigle.push(curRow)
    }

    return trigle
}