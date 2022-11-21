/**
 * #101 Symmetric Tree
 */

/**
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 *
 * 題目翻譯：
 * 給一個二元樹，判斷是不是鏡像樹(從root為中心，左邊跟右邊為鏡像)。
 */

/**
 * Example 1:
 * 
 * Input: root = [1, 2, 2, 3, 4, 4, 3]
 * Output: true
 */

/**
 * Example 2:
 * 
 * Input: root = [1, 2, 2, null, 3, null, 3]
 * Output: false
 */

/**
 * 判斷右邊是不是左邊的鏡像，就是先把右邊的樹反轉，再判斷是否與左邊的樹相等。 
 */

const isSymmetric = function(root) {
  if (root === null || (root.right === null && root.left === null)) return true

  // 先將right反轉，再比對是否相等
  root.right = revertTree(root.right)
  return isSameTree(root.left, root.right)

  // 反轉樹
  function revertTree(node) {
    if (node == null || node.left == null && node.right == null) return node

    let temp = revertTree(node.left)
    node.left = revertTree(node.right)
    node.right = temp

    return node
  }

  // 比對是否相等
  function isSameTree(left,right) {
    if (left === null && right === null) return true
    if (left === null && right !== null || right === null && left !== null) return false
    if (left.val !== right.val) return false

    return isSameTree (left.right, right.right) && isSameTree(left.left, right.left)
  }
}
