/**
 * https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/
 *
 * 数值的整数次方
 *
 * 实现函数 double pow(double x, int n)，求 x 的 n 次方。
 * 不得使用库函数，同时不需要考虑大数问题。
 *
 * 示例 1:
 * 输入: 2.10000, 3
 * 输出: 9.26100
 *
 * 示例 2:
 * 输入: 2.00000, -2
 * 输出: 0.25000
 *
 * 限制：
 *
 * -100.0 < x < 100.0
 * n 是 32 位有符号整数，其数值范围是 [−2^31, 2^31−1]
 *
 * 解法 2：快速幂
 * 求 x^n 最简单的方法是通过循环将 n 个 x 乘起来，时间复杂度为 O(n)，快速幂可将时间复杂度降低至 O(log2n)。
 * 对于任何十进制正整数 n，设其二进制为 bm...b3b2b1​：
 *   - 二转十：n = 2^0*b1 + 2^1*b2 + 2^2*b3 +...+ 2^m−1*bm
 * 将 x^n 中的 n 展开得到：
 *   - x^n = x^(2^0*b1 + 2^1*b2 + 2^2*b3 +...+ 2^m−1*bm)
 *         = x^(2^0*b1) * x^(2^1*b2) * x^(2^2*b3) *...* x^(2^m−1*bm)
 * 因此求 x^n 就转化为了：
 *   - 求 x1, x2, x4 ..., x^2^m−1
 *   - 再求 b1, b2, ..., bm
 *   - 相乘
 *
 * https://leetcode-cn.com/submissions/detail/139990529/
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  if (x === 0) {
    return 0;
  }

  // 初始化 res = 1
  let res = 1;
  // 若 n < 0，转换为 n > 0
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  // 把 n 二进制表示
  n = n.toString(2);
  let ni = n.length - 1; // n 二进制下标

  // 遍历二进制 n 的每一位计算每一个乘积项
  while (ni >= 0) {
    if (n.charAt(ni) === '1') {
      res *= x;
    }
    x *= x;
    ni--;
  }
  return res;
};
