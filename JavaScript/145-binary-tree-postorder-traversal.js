/**
 * #145 Binary Tree Postorder Traversal
 */

/**
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 */

/**
 * Example 1:
 * 
 * Input: root = [1, null, 2, 3]
 * Output: [3, 2, 1]
 */

/**
 * Example 2:
 * 
 * Input: root = []
 * Output: []
 */

/**
 * Example 3:
 * 
 * Input: root = [1]
 * Output: [1]
 */

const postorderTraversal = root => {
  if (!root) return []
  let ans = []
  let traverse = node => {
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
    ans.push(node.val)
  }

  traverse(root)
  return ans
}