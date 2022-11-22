/**
 * #104 Maximum Depth of Binary Tree
 */

/**
 * Given the root of a binary tree, return its maximum depth.
 * 
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *
 * 題目翻譯：
 * 找出二元樹最大深度並回傳。
 */

/**
 * Example 1:
 * 
 * Input: root = [3, 9, 20, null, null, 15, 7]
 * Output: 3
 */

/**
 * Example 2:
 * 
 * Input: root = [1, null, 2]
 * Output: [1, 2]
 */

/**
 * 設置兩個變數計算左節點長度與右節點長度，利用遞迴特性尋訪將其對應變數加一，最後比較大小回傳。
 */

const maxDepth = function(root) {
  let left, right = 0
  if (root === null) return 0
  if (root.right === null && root.left === null) return 1
  if (root.left !== null) left = 1 + maxDepth(root.left)
  if (root.right !== null) right = 1 + maxDepth(root.right)

  return left > right ? left : right
}
