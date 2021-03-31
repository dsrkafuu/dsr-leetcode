/**
 * https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/
 *
 * 打印从 1 到最大的 n 位数
 *
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。
 * 比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
 *
 * 示例:
 * 输入: n = 1
 * 输出: [1,2,3,4,5,6,7,8,9]
 *
 * 限制：
 * n 为正整数
 *
 * https://leetcode-cn.com/submissions/detail/139994688/
 */

/**
 * @param {number} n
 * @returns {number[]}
 */
const printNumbers = (n) => {
  const res = [];
  let max = 10 ** n - 1;
  if (Number.isSafeInteger(max)) {
    for (let i = 1; i <= max; i++) {
      res.push(i);
    }
  } else {
    max = BigInt(new Array(n).fill('9').join(''));
    for (let i = 1n; i <= max; i++) {
      res.push(i);
    }
  }
  return res;
};

// DEBUG
console.log(printNumbers(2));
console.log(printNumbers(60));
