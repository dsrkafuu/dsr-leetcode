/**
 * https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/
 *
 * 二进制中 1 的个数
 *
 * 请实现一个函数，输入一个二进制整数，输出该数二进制表示中 1 的个数。
 * 例如，把 9 表示成二进制是 1001，有 2 位是 1。因此，如果输入 9，则该函数输出 2。
 *
 * 限制：
 * 输入是长度为 32 的二进制串
 *
 * 示例：
 *
 * 输入：11111111111111111111111111111101
 * 输出：31
 *
 * 解法：正则
 *
 * https://leetcode-cn.com/submissions/detail/139520739/
 */

/**
 * @param {number} n
 * @return {number}
 */
const hammingWeight = (n) => (n.toString(2).match(/1/g) || []).length;
