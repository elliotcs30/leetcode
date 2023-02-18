/**
 * #108 Convert Sorted Array to Binary Search Tree
 */

/**
 * Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
 *
 *
 * 題目翻譯：
 * 將一個排序好的陣列轉成二元樹。
 */

/**
 * Example 1:
 * 
 * Input: nums = [-10, -3, 0, 5, 9]
 * Output: [0, -3, 9, -10, null, 5]
 * 
 * Explanation: 
 * [0, -10, 5, null, -3, null, 9] is also accepted
 */

/**
 * Example 2:
 * 
 * Input: nums = [1, 3]
 * Output: [3, 1]
 * 
 * Explanation: 
 * [1, null, 3] and [3, 1] are both height-balanced BSTs.
 */

/**
 * 利用二分法找尋每個的根節點，並搭配遞迴將其左右依序找出，直到二分法條件不符合就回傳
 */

const sortedArrayToBST = function(nums) {
  return traverse(nums, 0, nums.length-1)
}

function traverse(nums,start,end) {
  if (start > end) return null
  
  let mid = Math.floor((start + end) / 2)
  let root = new TreeNode(nums[mid])
  root.left = traverse(nums, start, mid-1)
  root.right = traverse(nums, mid+1, end)
  return root
}
