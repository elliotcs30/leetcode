/**
 * #100 Same Tree
 */

/**
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * 
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 *
 *
 * 題目翻譯：
 * 給定兩個二元樹，判斷這兩個樹的每一個節點中的值與節點位置是否都相同。
 */

/**
 * Example 1:
 * 
 * Input: p = [1, 2, 3], q = [1, 2, 3]
 * Output: true
 */

/**
 * Example 2:
 * 
 * Input: p = [1, 2], q = [1, null, 2]
 * Output: false
 */

/**
 * Example 3:
 * 
 * Input: p = [1, 2, 1], q = [1, 1, 2]
 * Output: false
 */

/**
 * 比較兩個節點的值，如果值不同或是子節點數量不相同，都是false。
 * 子節點不同就是說其中一邊有左右節點，另外一邊就只有一個左節點或右節點這種情況。 
 * 當目前值與子節點數量都相同，再比較子節點是否相同，將子節點丟入判斷是否相同的function，
 * 直到比較完毎個節點都是一樣的，結果才會是true。
 */

const isSameTree = function(p, q) {
  if (p === null && q === null) return true
  if (p !== null && q === null || p === null && q !== null) return false
  if (p.val != q.val) return false

  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
}
