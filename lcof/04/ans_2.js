/**
 * https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
 *
 * 二维数组中的查找
 *
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 *
 * 示例：
 *
 * 现有矩阵 matrix 如下：
 * [
 *   [1,   4,  7, 11, 15],
 *   [2,   5,  8, 12, 19],
 *   [3,   6,  9, 16, 22],
 *   [10, 13, 14, 17, 24],
 *   [18, 21, 23, 26, 30]
 * ]
 * 给定 target = 5，返回 true。
 * 给定 target = 20，返回 false。
 *
 * 限制：
 *
 * 0 <= n <= 1000
 * 0 <= m <= 1000
 *
 * 解法 2：
 *
 * 改版二分查找；
 * 根据数组的有序性，从二维数组右上角开始搜索，记当前元素为 cur；
 * 若 cur === target 则返回结果；
 * 若 cur < target，说明当前行的元素全部无效 (必定小于 cur)，cur 下移；
 * 若 cur > target，说明当前列的元素全部无效 (必定大于 cur)，cur 左移；
 * 重复以上搜索，当 cur 进行移动时出现越界则搜索失败。
 *
 * 例：在示例中搜索 13 的流程：
 * 15 => 11 => 12 => 16 => 9 => 14 => 13
 *
 * https://leetcode-cn.com/submissions/detail/138346942/
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {boolean}
 */
const findNumberIn2DArray = (matrix, target) => {
  if (Number.isNaN(target) || !matrix.length || !matrix[0].length) {
    return false;
  }

  let row = 0; // 行
  let col = matrix[0].length - 1; // 列

  // 当 cur 进行移动时出现越界则搜索失败
  while (row < matrix.length && col >= 0) {
    const cur = matrix[row][col];
    // 若 cur === target 则返回结果
    if (cur === target) {
      return true;
    }
    // 若 cur < target，说明当前行的元素全部无效 (必定小于 cur)，cur 下移
    cur < target && row++;
    // 若 cur > target，说明当前列的元素全部无效 (必定大于 cur)，cur 左移
    cur > target && col--;
  }
  return false;
};

// DEBUG
const m = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
console.log(findNumberIn2DArray(m, 13));
console.log(findNumberIn2DArray(m, 20));
console.log(findNumberIn2DArray([[-5]], -10));
