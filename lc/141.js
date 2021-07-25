/**
 * 环形链表
 * https://leetcode-cn.com/problems/linked-list-cycle/solution/huan-xing-lian-biao-by-leetcode-solution/
 *
 * 给定一个链表，判断链表中是否有环。
 *
 * https://leetcode-cn.com/submissions/detail/199482353/
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
    try {
      slow = slow.next;
      fast = fast.next;
      fast = fast.next;
    } catch {
      return false;
    }
    if (slow === fast) {
      return true;
    }
  }
  return false;
};
