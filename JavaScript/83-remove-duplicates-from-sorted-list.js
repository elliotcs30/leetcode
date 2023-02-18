/**
 * #83 Remove Duplicates from Sorted List
 */

/**
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 *
 * 題目翻譯：
 * 一個排序過的連結陣列，刪除重複的節點。
 */

/**
 * Example 1:
 * 
 * Input: head = [1, 1, 2]
 * Output: [1, 2]
 */

/**
 * Example 2:
 * 
 * Input: head = [1, 1, 2, 3, 3]
 * Output: [1, 2, 3]
 */

/**
 * 因為已經將陣列排序過，如果後面的數值與當前的一致就跳過
 */

const deleteDuplicates = function(head) {
  if (head === null || head.next === null) return head
  let cur = head

  while (cur.next !== null) {
    // 如果目前的值與下一個相同就跳過
    if (cur.val == cur.next.val) cur.next = cur.next.next
    else cur = cur.next
  }
  return head
}

