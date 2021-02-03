/**
 * https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
 *
 * 反转链表
 *
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 *
 * 解法：三指针
 *
 * https://leetcode-cn.com/submissions/detail/142114705/
 */
import { List, ListNode } from '../../class/List.js';

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  if (!head || !head.next) {
    return head;
  }

  let slow = null; // 虚拟头
  let fast = head;

  let temp;
  while (fast) {
    temp = fast.next;
    fast.next = slow;
    slow = fast;
    fast = temp;
  }
  return slow;
};

// DEBUG
const list = new List([1, 2, 3, 4]);
reverseList(list.head);
