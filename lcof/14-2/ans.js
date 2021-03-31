/**
 * https://leetcode-cn.com/problems/jian-sheng-zi-ii-lcof/
 *
 * 剪绳子
 *
 * 本题所有要求与 14-1 相同，仅数据范围不同。
 * 答案需要取模 1e9+7 (1000000007)，如计算初始结果为：1000000008，请返回 1。
 *
 * 限制：
 * 2 <= n <= 1000
 * 2 <= m <= n
 *
 * 示例：
 *
 * 输入：1000
 * 输出：620946522
 *
 * 解法：贪心 (数学规律)
 *
 * 由于最大 n 上调至 1000，因此需要取模；
 * 虽然 JS 本身的安全大整数范围 2**53-1 能安全存储运算中的所有数据，
 * 但取模后无法正常使用 max 函数进行比较，因此无法直接使用 14-1 中的递归与动态规划。
 * 有一种取巧的方法是全部使用 BigInt 并且在最后进行取余，但是由于对 BigInt 的操作不是常数时间的，时间上的表现会很差：
 * https://leetcode-cn.com/submissions/detail/139509570/
 *
 * 因此采用数学规律进行贪心计算。
 * 对于剪绳子这类问题：
 *   1. 当所有绳段长度相等时，乘积最大。
 *   2. 最优的绳段长度为 3。
 * 得到贪心规则：
 *   - 最优：把绳子尽可能切为多个长度为 3 的片段，留下的最后一段绳子的长度可能为 0,1,2 三种情况。
 *   - 次优：若最后一段绳子长度为 2；则保留，不再拆为 1+1。
 *   - 最差：若最后一段绳子长度为 1；则应把一份 3+1 替换为 2+2，因为 2×2>3×1。
 *
 * https://leetcode-cn.com/submissions/detail/139518221/
 */

/**
 * @param {number} n
 * @returns {number}
 */
const cuttingRope = (n) => {
  // 边界情况
  if (n === 2) {
    return 1;
  }
  if (n === 3) {
    return 2;
  }
  let res = 0n;
  let a = BigInt(Math.floor(n / 3)); // 除以三
  let b = n % 3; // 取余三
  // 最优：最后剩下 0
  b === 0 && (res = 3n ** a);
  // 次优：最后剩下 2，不再划分
  b === 2 && (res = 3n ** a * 2n);
  // 最差：最后剩下 1，把一份 3+1 替换为 2+2
  b === 1 && (res = 3n ** (a - 1n) * 4n);
  return Number(res % BigInt(1e9 + 7));
};

// DEBUG
console.log(cuttingRope(3));
console.log(cuttingRope(1000));
