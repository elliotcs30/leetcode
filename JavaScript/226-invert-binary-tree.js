/**
 * #226 Invert Binary Tree
 */

/**
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * 題目翻譯：
 * 反轉一個二元樹
 */

/**
 * Example 1:
 * 
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9 
 * 
 * Invert
 * 
 *      4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
 * 
 * Input: root = [4, 2, 7, 1, 3, 6, 9]
 * Output: [4, 7, 2, 9, 6, 3, 1]
 */

/**
 * Example 2:
 * 
 *      2
 *    /   \
 *   1     3
 * 
 * Invert
 * 
 *      2
 *    /   \
 *   3     1
 * 
 * Input: root = [2, 1, 3]
 * Output: [2, 3, 1]
 */

/**
 * Example 3:
 * 
 * Input: root = []
 * Output: []
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const root = [2, 1, 3]
const target = []

const invertTree = function(root) {
  if (root === null) return root

  let temp = root.left
  root.left = root.right
  root.right = temp

  invertTree(root.left)
  invertTree(root.right)
  
  return root
}

// or

const invertTree2 = function (root) {
  treeNode(root)
  return root
}

let treeNode = function (root) {
  if (root === null) return

  let temp = root.right
  root.right = root.left
  root.left = temp
  
  treeNode(root.left)
  treeNode(root.right)
}