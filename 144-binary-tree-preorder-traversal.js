/**
 * #144 Binary Tree Preorder Traversal
 */

/**
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 */

/**
 * Example 1:
 * 
 * Input: root = [1, null, 2, 3]
 * Output: [1, 2, 3]
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

const preorderTraversal = root => {
  if (!root) return []
  let res = [], stack = []
  let cur = root
  while (cur || stack.length) {
    while (cur) {
      res.push(cur.val)
      stack.push(cur.right)
      cur = cur.left
    }
    cur = stack.pop()
  }
  return res
}