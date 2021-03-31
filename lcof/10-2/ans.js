/**
 * https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/
 *
 * 青蛙跳台阶问题
 *
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。
 * 求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 * 答案需要取模 1e9+7 (1000000007)，如计算初始结果为：1000000008，请返回 1。
 *
 * 限制：
 *
 * 0 <= n <= 100
 *
 * 解法：
 * 假设跳到 n 级台阶有 f(n) 种方法。根据题目，青蛙在跳上 n 级时有 2 种方法：
 * - 从 n - 1 级跳 1 级上来
 * - 从 n - 2 级跳 2 级上来
 * 由于青蛙跳到 n-1 级有 f(n-1) 种方法，跳到 n-2 级有 f(n-2) 种方法。
 * 所以 f(n) = f(n-1) + f(n-2)，即斐波那契数列。
 * 区别是起始项不同：
 * 斐波那契：0 1 1 2 3 5...
 * 青蛙跳跃：1 1 2 3 5 ...
 *
 * https://leetcode-cn.com/submissions/detail/138773678/
 */

/**
 * @param {number} n
 * @returns {number}
 */
const numWays = function (n) {
  let a = 1;
  let b = 1;
  // 窗口右移计算，当前结果为 a
  while (n > 0) {
    b = a + b; //  a + b  => b
    a = b - a; // b (old) => a
    n--;
    // 注意越界问题，此处取模 1e9+7 (1000000007)
    a > 1e9 + 7 && (a %= 1e9 + 7);
  }
  return a;
};
