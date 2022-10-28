/**
 * #2 Add Two Numbers
 */

/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * 題目翻譯：
 * 兩個連結陣列分別代表兩個非負整數，他們的位數是反向儲存(越前面的節點位數越低)，每一個節點代表一個位數，將這兩個連結陣列加總後以連結陣列形式回傳。
 */

/**
 * Example 1:
 * 
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * 
 * Explanation: 
 * 342 + 465 = 807.
 */

/**
 * Example 2:
 * 
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 */

/**
 * Example 3:
 * 
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 */

/**
 * 由以上範例可以觀察出，陣列越前面的數值相加後，會往後進位於下一陣列中
 * 這與學習過的數學加法類似，只是這邊是反序的方式。
 * 
 * 1. 因此可用一個新的 linked list 來儲存相加後的結果
 * 2. list1 與 list2 的長度會不同
 * 3. 若兩陣列數值相加後，須考慮會有10進位的情況
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    
};

