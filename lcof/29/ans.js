/**
 * https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
 *
 * 顺时针打印矩阵
 *
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 *
 * 示例：
 * 输入：matrix = [
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9]
 * ]
 * 输出：[1, 2, 3, 6, 9, 8, 7, 4, 5]
 *
 * 限制：
 *  - 0 <= matrix.length <= 100
 *  - 0 <= matrix[i].length <= 100
 *
 * 解法：模拟
 * 设定上下左右共四个边界，按指定方向进行遍历；
 * 根据边界进行打印，行/列完成后边界向内收缩一格；
 * 若边界相遇，则结束打印；
 * 例如从左向右打印时，由左边界打印至右边界，随后上边界下移并判断是否越过了下边界
 *
 * https://leetcode-cn.com/submissions/detail/145276574/
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  const res = []; // 结果
  if (!matrix.length || !matrix[0].length) {
    return res;
  }
  // 设定初始边界
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;
  // 遍历
  while (true) {
    for (let i = left; i <= right; i++) res.push(matrix[top][i]); // 左到右
    if (++top > bottom) break; // 上边界下移
    for (let i = top; i <= bottom; i++) res.push(matrix[i][right]); // 上到下
    if (--right < left) break; // 右边界左移
    for (let i = right; i >= left; i--) res.push(matrix[bottom][i]); // 右到左
    if (--bottom < top) break; // 下边界上移
    for (let i = bottom; i >= top; i--) res.push(matrix[i][left]); // 下到上
    if (++left > right) break; // 左边界右移
  }
  return res;
};
