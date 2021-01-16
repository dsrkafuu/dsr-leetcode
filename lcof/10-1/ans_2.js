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
 * 解法 2：迭代
 *
 * https://leetcode-cn.com/submissions/detail/138773440/
 */

/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
  let a = 0;
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

// DEBUG
console.log(fib(81));
