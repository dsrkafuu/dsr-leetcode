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
 * 解法：迭代
 *
 * https://leetcode-cn.com/submissions/detail/142118266/
 */
import { ListNode } from '../../class/List.js';

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  if (!l1 && !l2) {
    return null;
  }
  if (!l1 || !l2) {
    return l1 || l2;
  }

  // 找头
  let head;
  if (l1.val <= l2.val) {
    head = l1;
    l1 = l1.next;
  } else {
    head = l2;
    l2 = l2.next;
  }
  // 同步
  let r = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      r.next = l1;
      l1 = l1.next;
    } else {
      r.next = l2;
      l2 = l2.next;
    }
    r = r.next;
  }
  // 不同长
  while (l1) {
    r.next = l1;
    l1 = l1.next;
    r = r.next;
  }
  while (l2) {
    r.next = l2;
    l2 = l2.next;
    r = r.next;
  }
  r.next = null;

  return head;
};
