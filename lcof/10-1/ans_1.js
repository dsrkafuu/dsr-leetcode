/**
 * https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
 *
 * 斐波那契数列
 *
 * 写一个函数，输入 n ，求斐波那契 (Fibonacci) 数列的第 n 项。
 * F(0) = 0, F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 * 答案需要取模 1e9+7 (1000000007)，如计算初始结果为：1000000008，请返回 1。
 *
 * 限制：
 *
 * 0 <= n <= 100
 *
 * 解法 1：递归
 *
 * https://leetcode-cn.com/submissions/detail/138771276/
 */

/**
 * @param {number} n
 * @param {Object} map 哈希表
 */
const _fib = (n, map) => {
  let a = map[n - 1];
  a === undefined && (a = _fib(n - 1, map));
  let b = map[n - 2];
  b === undefined && (b = _fib(n - 2, map));
  // 注意越界问题，此处取模 1e9+7 (1000000007)
  let res = (a + b) % (1e9 + 7);
  return (map[n] = res);
};

/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }
  const map = {
    0: 0,
    1: 1,
  };
  return _fib(n, map);
};

// DEBUG
console.log(fib(81));
