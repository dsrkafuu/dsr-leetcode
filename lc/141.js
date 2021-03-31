/**
 * 环形链表
 * https://leetcode-cn.com/problems/linked-list-cycle/solution/huan-xing-lian-biao-by-leetcode-solution/
 *
 * 给定一个链表，判断链表中是否有环。
 */

/**
 * @param {ListNode} head
 * @returns {boolean}
 */
var hasCycle = function (head) {
  if (!head) {
    return false;
  }

  let fast = head;
  let slow = head;

  while (fast && slow) {
    slow = slow.next;
    fast = fast.next;
    if (!fast) {
      return false;
    }
    fast = fast.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};
