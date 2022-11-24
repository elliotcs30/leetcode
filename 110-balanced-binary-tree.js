/**
 * #110 Balanced Binary Tree
 */

/**
 * Given a binary tree, determine if it is height-balanced.
 *
 *
 * 題目翻譯：
 * 給一個二元樹，判斷這是不是一個高度平衡的樹。
 */

/**
 * Example 1:
 * 
 * Input: root = [3, 9, 20, null, null, 15, 7]
 * Output: true
 */

/**
 * Example 2:
 * 
 * Input: root = [1, 2, 2, 3, 3, null, null, 4, 4]
 * Output: false
 */

/**
 * Example 3:
 * 
 * Input: root = []
 * Output: true
 */

/**
 * 尋找樹的左邊節點深度與樹的右邊節點深樹後相減，如果差超過1，表示非高度平衡樹
 * 如果沒差超過1，傳入左節點與右節點繼續判斷是否為高度平衡樹
 */

const isBalanced = function(root) {
  if (root == null || (root.right == null && root.left == null)) return true

  // 找出樹左右邊的深度
  const dL = findDeep(root.left)
  const dR = findDeep(root.right)

  // 看樹的深度是否差1內
  const diff = Math.abs(dL - dR) <= 1

  //如果深度差超過1, return false
  //深度沒差超過1，傳入左右節點繼續判斷
  return diff && isBalanced(root.left) && isBalanced(root.right)
}

// 找出節點深度
function findDeep(root) {
  if (root === null) return 0
  const deepL = 1 + findDeep(root.left)
  const deepR = 1 + findDeep(root.right)

  return deepL > deepR ? deepL : deepR
}
