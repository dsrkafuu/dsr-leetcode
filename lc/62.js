/**
 * https://leetcode-cn.com/problems/unique-paths/
 *
 * 不同路径
 * 一个机器人位于一个 m x n 网格的左上角。
 * 机器人每次只能向下或者向右移动一步；机器人试图达到网格的右下角。
 * 问总共有多少条不同的路径？
 *
 * 解法：动态规划
 * 记 f(i, j) 为左上角走到当前位置的路径数
 * f(i, j) = f(i−1, j) + f(i, j−1)
 * 且 f(0, ?) 和 f(?, 0) 均为 1
 * https://leetcode-cn.com/submissions/detail/154932532/
 */

/**
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
var uniquePaths = function (m, n) {
  const matrix = new Array(m).fill(1).map(() => new Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
    }
  }
  return matrix[m - 1][n - 1];
};

uniquePaths(2, 3);
