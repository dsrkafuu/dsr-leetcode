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
 * 解法 2：重复入栈
 * 设定一个最小值变量直接记录最小值；
 * 当每次入栈时，判断是否小于等于最小值，若小于则先将原最小值再入栈一次，然后入栈这个新最小值并记录；
 * 当每次出栈时，若出栈的值等于记录的最小值，说明栈内下个元素并不是栈应有的值，
 * 而是记录下来的旧最小值，将其出栈并记录即可；
 * 注意每次入栈时需要做小于等于判断，以应对重复最小值例如 0 1 0 这种情况
 *
 * https://leetcode-cn.com/submissions/detail/145282159/
 */

class MinStack {
  constructor() {
    this.m = undefined; // 记录最小值

    this.s = []; // 逆向，方便取顶
    this.s.push = this.s.unshift;
    this.s.pop = this.s.shift;
    this.s.top = () => this.s[0];
  }

  /**
   * @param {number} val
   */
  push(val) {
    // 若空，则直接设定最小值
    if (this.s.length === 0) {
      this.m = val;
    }
    // 非空，判断新值是否小于最小值，重复入栈
    else if (val <= this.m) {
      this.s.push(this.m);
      this.m = val;
    }
    this.s.push(val);
  }

  pop() {
    const val = this.s.pop();
    // 出栈的值是否等于记录的最小值
    if (val === this.m) {
      this.m = this.s.pop(); // 重复出栈
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
    return this.m;
  }
}

// DEBUG
const stack = new MinStack();
stack.push(0);
stack.push(1);
stack.push(0);
console.log(stack.min());
stack.pop();
console.log(stack.min());
