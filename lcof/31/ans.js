/**
 * https://leetcode-cn.com/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/
 *
 * 栈的压入、弹出序列
 *
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。
 * 假设压入栈的所有数字均不相等。
 * 例如，序列 {1,2,3,4,5} 是某栈的压栈序列，
 * 序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，
 * 但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。
 *
 * 示例：
 * 输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
 * 输出：true
 * 解释：我们可以按以下顺序执行：
 * push(1), push(2), push(3), push(4), pop() -> 4,
 * push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
 *
 * 解法：模拟
 * 按照入栈顺序依次入栈；
 * 每次入栈后，检查栈顶元素是否为弹出顺序中的当前元素；
 * 若是，则弹出，若否，则继续入栈
 *
 * https://leetcode-cn.com/submissions/detail/145283558/
 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @returns {boolean}
 */
const validateStackSequences = (pushed, popped) => {
  if (!pushed.length && !popped.length) {
    return true;
  }
  if (!pushed.length || !popped.length || pushed.length !== popped.length) {
    return false;
  }

  const stack = [];
  stack.push = Array.prototype.unshift;
  stack.pop = Array.prototype.shift;
  stack.top = () => stack[0];

  let popi = 0; // 弹出顺序中的当前元素
  for (let pushi = 0; pushi < pushed.length; pushi++) {
    // 入栈一个元素
    stack.push(pushed[pushi]);
    // 检查是否出栈
    while (stack.length > 0 && stack.top() === popped[popi]) {
      stack.pop();
      popi++;
    }
  }

  return !stack.length;
};
