/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 *
 * 有效的括号
 * 给定一个只包括 ( ) { } [ ] 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 * 输入：s = "()[]{}"
 * 输出：true
 *
 * 解法：栈
 * https://leetcode-cn.com/submissions/detail/202253908/
 */

/**
 * @param {string} s
 * @returns {boolean}
 */
var isValid = function (s) {
  if (!s.length) {
    return true;
  }
  if (s.length % 2 !== 0) {
    return false;
  }

  const stack = [];
  const patterns = ['{}', '()', '[]'];
  for (const char of s.split('')) {
    const top = stack.length ? stack[stack.length - 1] : null;
    if (patterns.includes(`${top}${char}`)) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
