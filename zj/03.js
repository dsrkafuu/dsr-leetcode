/**
 * https://leetcode-cn.com/problems/add-strings/
 *
 * 字符串相加
 * 给定两个字符串形式的非负整数 num1 和 num2，计算它们的和。
 * 提示：
 * num1 和num2 的长度都小于 5100
 * num1 和num2 都只包含数字 0-9
 * num1 和num2 都不包含任何前导零
 * 你不能使用任何內建 BigInteger 库，也不能直接将输入的字符串转换为整数形式
 *
 * https://leetcode-cn.com/submissions/detail/154560774/
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;
  let add = 0; // 进位
  let ret = ''; // 结果

  while (p1 >= 0 || p2 >= 0) {
    // 取字符，若为空则置 0
    let ch1 = num1.charAt(p1--) || '0';
    let ch2 = num2.charAt(p2--) || '0';
    // 相加并清空进位
    let sum = Number(ch1) + Number(ch2) + add;
    add = 0;
    // 视情况设置进位
    if (sum >= 10) {
      add = 1;
      sum = sum - 10;
    }
    ret = sum + ret;
  }

  // 补全最后进位
  if (add) {
    ret = add + ret;
  }

  return ret;
};
