/**
 * #203 Remove Linked List Elements
 */

/**
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
 *
 * (Remove all elements from a linked list of integers that have value val.)
 *
 * 題目翻譯：
 * 給一個值val，移除連結陣列中所有值為val的節點。
 */

/**
 * Example 1:
 * 
 * Input: head = [1, 2, 6, 3, 4, 5, 6], value = 6
 * Output: [1, 2, 3, 4, 5]
 */

/**
 * Example 2:
 * 
 * Input: head = [], val = 1
 * Output: []
 */

/**
 * Example 3:
 * 
 * Input: head = [7,7,7,7], val = 7
 * Output: []
 */

const head = [1, 2, 6, 3, 4, 5, 6]
const val = 6

/**
 * 思路：
 * 1. 若陣列為空值，則顯示空值
 * 2. 走訪陣列，比對目前節點與 val 相等, 就移除當前的這個節點
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
  if (head == null) return null

  // prev一開始為假節點，例如[2]，val=2的時候，就可以讓假節點指向null，完成移除的動作
  let node = new ListNode(0)

  // [1,2,3] val=2，當走到[2]的時候，移除目前[2]這點的方法是讓[1]跳過2直接接[3]，變成[1,3]，
  // 所以這邊需要先儲存前一個節點prev來備用
  let prev = node
  node.next = head

  while (head != null) {
    if (head.val != val) {
      // 目前節點與val不相等，往下一個
      prev = head
      head = head.next
    } else {
      // 目前節點與val相等，跳過目前節點
      prev.next = head.next
      head = head.next     
    }
  }
  return node.next
}