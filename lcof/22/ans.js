/**
 * https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 *
 * 链表中倒数第 k 个节点
 *
 * 输入一个链表，输出该链表中倒数第 k 个节点。
 * 为了符合大多数人的习惯，本题从 1 开始计数，即链表的尾节点是倒数第 1 个节点。
 * 例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。
 * 这个链表的倒数第 3 个节点是值为 4 的节点。
 *
 * 解法：快慢指针
 *
 * https://leetcode-cn.com/submissions/detail/142106813/
 */
import { List, ListNode } from '../../class/List.js';

/**
 * @param {ListNode} head
 * @param {number} k
 * @returns {ListNode}
 */
const getKthFromEnd = (head, k) => {
  if (!head || k < 1) {
    return null;
  }
  if (!head.next && k === 1) {
    return head;
  }
  let fast = head;
  while (k > 0) {
    fast = fast.next || null;
    k--;
  }
  let slow = head;
  while (fast) {
    fast = fast.next || null;
    slow = slow.next;
  }
  return slow;
};

// DEBUG
const list = new List([1, 2, 3, 4, 5, 6]);
console.log(getKthFromEnd(list.head, 3));
console.log(getKthFromEnd(list.head, 1));
console.log(getKthFromEnd(list.head, 6));
