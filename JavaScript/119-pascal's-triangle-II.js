/**
 * #119 Pascal's Triangle II
 */

/**
 * Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 */

/**
 * Example 1:
 * 
 * Input: rowIndex = 3
 * Output: [1, 3, 3, 1]
 */

/**
 * Example 2:
 * 
 * Input: rowIndex = 0
 * Output: [1]
 */

/**
 * Example 3:
 * 
 * Input: rowIndex = 1
 * Output: [1, 1]
 */

const getRow = rowIndex => {
  let values = []

  for (let n = 0; n <= rowIndex; n++) {
    values[n] = []
    values[n][0] = 1
    for (let k = 1; k < n; k++) {
      values[n][k] = values[n - 1][k - 1] + values[n - 1][k]
    }
    values[n][n] = 1
  }

  return values[rowIndex]
}