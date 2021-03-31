/**
 * https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
 *
 * 删除链表的节点
 *
 * 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
 * 返回删除后的链表的头节点。
 *
 * 限制：
 * 题目保证链表中节点的值互不相同
 *
 * https://leetcode-cn.com/submissions/detail/139998699/
 */
import { ListNode, List } from '../../class/List.js';

/**
 * @param {ListNode} head
 * @param {number} val
 * @returns {ListNode}
 */
const deleteNode = (head, val) => {
  // 空链表
  if (!head) {
    return null;
  }
  // 删除头
  if (head.val === val) {
    head = head.next;
    return head;
  }

  // 工作指针
  let fast = head.next;
  let slow = head;
  while (fast) {
    if (fast.val === val) {
      fast = fast.next;
      slow.next = fast;
      return head;
    }
    slow = slow.next;
    fast = fast.next;
  }
  return head;
};

// DEBUG
const list1 = new List([3]);
console.log(deleteNode(list1.head, 3));
const list2 = new List([3, 4]);
console.log(deleteNode(list2.head, 3));
const list3 = new List([3, 4]);
console.log(deleteNode(list3.head, 4));
const list4 = new List([3, 4, 5, 6, 7]);
console.log(deleteNode(list4.head, 6));
