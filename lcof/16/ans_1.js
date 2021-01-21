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
 * 解法 1：运算符
 *
 * https://leetcode-cn.com/submissions/detail/139983767/
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => x ** n;
