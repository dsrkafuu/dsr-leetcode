/**
 * 爬楼梯
 * https://leetcode-cn.com/problems/climbing-stairs/
 *
 * 设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 *
 * f(1) = 1
 * f(2) = 2
 * f(3) = 3 = f(1) + f(2)
 */

/**
 * @param {number} n
 * @returns {number}
 */
var climbStairs = function (n) {
  const fib = (n) => {
    let a = 0;
    let b = 1;

    while (n > 0) {
      b = a + b;
      a = b - a;
      n--;
    }
    return a;
  };
  return fib(n + 1);
};
