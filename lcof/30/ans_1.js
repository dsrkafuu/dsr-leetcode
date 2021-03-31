/**
 * https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/
 *
 * 包含 min 函数的栈
 *
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数；
 * 在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
 *
 * 示例：
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.min(); // -3
 * minStack.pop();
 * minStack.top(); // 0
 * minStack.min(); // -2
 *
 * 解法 1：辅助栈
 * 主栈依照标准栈的实现；
 * 辅助栈降序 (非严格) 保存入栈值，保证栈顶元素为最小值
 *
 * https://leetcode-cn.com/submissions/detail/145280813/
 */

class MinStack {
  constructor() {
    this.s = [];
    this.ms = [];

    this.s.push = this.s.unshift;
    this.s.pop = this.s.shift;
    this.s.top = () => this.s[0];
    this.ms.push = this.ms.unshift;
    this.ms.pop = this.ms.shift;
    this.ms.top = () => this.ms[0];
  }

  /**
   * @param {number} val
   */
  push(val) {
    this.s.push(val);
    // 若辅助栈为空或新值小于等于最小值
    if (this.ms.length === 0 || val <= this.ms.top()) {
      this.ms.push(val);
    }
  }

  pop() {
    // 若主栈弹出值等于最小值
    if (this.s.pop() === this.ms.top()) {
      this.ms.pop();
    }
  }

  /**
   * @returns {number|undefined}
   */
  top() {
    return this.s.top();
  }

  /**
   * @returns {number|undefined}
   */
  min() {
    return this.ms.top();
  }
}
