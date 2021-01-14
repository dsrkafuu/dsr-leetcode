/**
 * https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 *
 * 从尾到头打印链表
 *
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 *
 * 示例：
 *
 * 输入：head = [1,3,2]
 * 输出：[2,3,1]
 *
 * 限制：
 *
 * 0 <= 链表长度 <= 10000
 *
 * 解法：栈
 *
 * https://leetcode-cn.com/submissions/detail/138354124/
 */
import { List, ListNode } from '../../class/List.js';

/**
 * @param {ListNode} head
 * @return {number[]}
 */
const reversePrint = (head) => {
  const res = [];
  let worker = head; // 工作指针
  while (worker) {
    res.unshift(worker.val);
    worker = worker.next;
  }
  return res;
};

// DEBUG
const list = new List([1, 2, 3, 4, 5]);
console.log(reversePrint(list.head));
