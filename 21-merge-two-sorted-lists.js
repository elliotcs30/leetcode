/**
 * #21 Merge Two Sorted Lists
 */

/**
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * 
 * Return the head of the merged linked list.
 *
 * 題目翻譯：
 * 結合兩個排序過的連結串列為一個新的連結串列後回傳。
 */

/**
 * Example 1:
 * 
 * Input: list1 = [1, 2, 4], list2 = [1, 3, 4]
 * Output: [1, 1, 2, 3, 4, 4]
 */

/**
 * Example 2:
 * 
 * Input: list1 = [], list2 = []
 * Output: []
 */

/**
 * Example 3:
 * 
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 */

/**
 * 讀取 list1 與 list2 的值，如果 list1 < list2 就將當前 list1 的值放到 result 陣列中，若 list2 < list1 那就將 list2 的值放入 result 陣列中。
 * 
 */

const list1 = [1, 2, 4], list2 = [1, 3, 4]

/**
 * 把兩個字串相加, 再把陣列中資料排序(leetcode 不會過)
 */
const mergeTwoLists1 = function (l1, l2) {
  const result = l1.concat(l2)
  return result.sort()
}

/**
 * 要使用以下解法：
 */
const mergeTwoLists2 = function (l1, l2) {
  let headNode = new ListNode(0);
  let currentNode = headNode;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      currentNode.next = l1;
      l1 = l1.next;
    } else {
      currentNode.next = l2;
      l2 = l2.next;
    }
    currentNode = currentNode.next;
  }
 
  if (l1 === null) {
    currentNode.next = l2;
  } else if (l2 === null) {
    currentNode.next = l1;
  }
  return headNode.next;
};

mergeTwoLists2(list1, list2)
