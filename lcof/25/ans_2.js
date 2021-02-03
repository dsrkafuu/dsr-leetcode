/**
 * https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
 *
 * 合并两个排序的链表
 *
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
 *
 * 示例：
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 * 解法：迭代 (优化)
 *
 * https://leetcode-cn.com/submissions/detail/142121429/
 */
import { ListNode } from '../../class/List.js';

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  if (!l1 && !l2) {
    return null;
  }
  if (!l1 || !l2) {
    return l1 || l2;
  }

  // 伪头结点
  const head = {};

  // 查找下一个
  let p = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }
    p = p.next;
  }
  while (l1) {
    p.next = l1;
    l1 = l1.next;
    p = p.next;
  }
  while (l2) {
    p.next = l2;
    l2 = l2.next;
    p = p.next;
  }
  p.next = l1;

  return head.next;
};
