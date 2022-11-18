/**
 * #94 Binary Tree Inorder Traversal
 */

/**
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * 題目翻譯：
 * 給予一組整數陣列，返回兩數字的相加等於目標值在陣列中的位置。
 * 
 * 每兩個input的數列值相加後，只會找到一組可以等於target值的解。
 */

/**
 * Example 1:
 * 
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * 
 * Explanation: 
 * Because nums[0] + nums[1] == 9,
 * we return [0, 1]
 */

/**
 * Example 2:
 * 
 * Input: nums = [3, 2, 4], target = 6
 * Output: [1, 2]
 */

/**
 * Example 3:
 * 
 * Input: nums = [3, 3], target = 6
 * Output: [0, 1]
 */

/**
 * 暴力破解法(Brute Force):
 * 使用for迴圈，一個一個跑
 */

const inorderTraversal = function(root) {
  let list = []

  return checkTree(root, list)

  function checkTree(root, list) {
    if (root === null) return list

    list = checkTree(root.left, list)
    list.push(root.val)
    return checkTree(root.right, list)
  }
}
