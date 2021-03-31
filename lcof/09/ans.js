/**
 * https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
 *
 * 用两个栈实现队列
 *
 * 用两个栈实现一个队列。
 * 队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead，分别完成在队列尾部插入整数和在队列头部删除整数的功能。
 * 若队列中没有元素，deleteHead 操作返回 -1。
 *
 * 示例 1：
 *
 * 输入：
 * ["CQueue","appendTail","deleteHead","deleteHead"]
 * [[],[3],[],[]]
 * 输出：[null,null,3,-1]
 *
 * 示例 2：
 *
 * 输入：
 * ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
 * [[],[],[5],[2],[],[]]
 * 输出：[null,-1,null,null,5,2]
 *
 * 限制：
 *
 * 1 <= values <= 10000
 *
 * 解法：
 * inStack 负责插入操作，outStack 负责删除操作；
 * 插入：直接插入 inStack
 * 删除：
 * 如果 outStack 为空，则将 inStack 里的所有元素弹出插入到 outStack 里；
 * 从 outStack 弹出一个元素，如果 outStack 为空，返回 -1。
 *
 * https://leetcode-cn.com/submissions/detail/138567129/
 */

class CQueue {
  constructor() {
    // JS 模拟栈 (push pop only)
    this.inStack = [];
    this.outStack = [];
  }

  /**
   * @param {number} value
   * @returns {void}
   */
  appendTail(value) {
    this.inStack.push(value);
  }

  /**
   * @returns {number}
   */
  deleteHead() {
    // outStack 有内容
    if (this.outStack.length > 0) {
      return this.outStack.pop();
    }
    // outStack 为空
    // 将 inStack 里的所有元素弹出插入到 outStack 里
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
    // 返回内容或返回 -1
    if (this.outStack.length > 0) {
      return this.outStack.pop();
    }
    return -1;
  }
}
