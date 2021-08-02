/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 *
 * 反转链表
 *
 * 解法：指针
 * https://leetcode-cn.com/submissions/detail/202269833/
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let pre = null;
  let cur = head;
  let fur = head.next;

  while (fur) {
    cur.next = pre;
    pre = cur;
    cur = fur;
    fur = fur.next;
  }
  cur.next = pre;
  return cur;
};
