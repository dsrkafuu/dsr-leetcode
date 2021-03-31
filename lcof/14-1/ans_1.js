/**
 * https://leetcode-cn.com/problems/jian-sheng-zi-lcof/
 *
 * 剪绳子
 *
 * 一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段 (m、n都是整数)，
 * 每段绳子的长度记为 k[0],k[1]...k[m-1]。
 * 请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？
 * 例如，当绳子的长度是 8 时，我们把它剪成长度分别为 2、3、3 的三段，此时得到的最大乘积是 18。
 *
 * 限制：
 * 2 <= n <= 58
 * 2 <= m <= n
 *
 * 示例：
 *
 * 输入：10
 * 输出：36
 * 解释：10 = 3 + 3 + 4, 3 × 3 × 4 = 36
 *
 * 解法 1：递归
 *
 * 记 f(n) 为长度为 n 的绳子可以得到的最大乘积；
 * 那么 f(n) = max(i*(n-i), i*f(n-i))，i 为 1 到 n-2 的整数；
 * 即表示在 (分为 i 和 n-i 两段) 和 (分为 i 和 f(n-i) 多段) 中选择更接近结果的情况。
 * 由递归函数，发现显然可以使用哈希表优化递归，或使用动态规划，以下使用优化递归。
 *
 * https://leetcode-cn.com/submissions/detail/139507621/
 */

/**
 * @param {number} n
 * @param {Array<number>} map 缓存
 * @returns {number}
 */
const _cuttingRope = (n, map) => {
  // 初值 f(2) = 1
  if (n === 2) {
    return 1;
  }
  // 检查缓存
  if (map[n] !== undefined) {
    return map[n];
  }
  // 计算最大乘积
  let max = 0;
  // f(n) = max(i*(n-i), i*f(n-i))，i 为 1 到 n-2 的整数
  for (let i = 1; i <= n - 2; i++) {
    max = Math.max(max, i * (n - i), i * _cuttingRope(n - i, map));
  }
  map[n] = max;
  return max;
};

/**
 * @param {number} n
 * @returns {number}
 */
const cuttingRope = (n) => {
  const map = new Array(n + 1);
  return _cuttingRope(n, map);
};

// DEBUG
console.log(cuttingRope(8));
console.log(cuttingRope(10));
