/**
 * https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/
 *
 * 矩阵中的路径
 *
 * 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
 * 路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。
 * 如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。
 * 例如，在下面的3×4的矩阵中包含一条字符串 "bfce" 的路径 (路径中的字母用大写标出)。
 * [
 *   ["a","B","c","e"],
 *   ["s","F","C","s"],
 *   ["a","d","E","e"]
 * ]
 * 但矩阵中不包含字符串 "abfb" 的路径，
 * 因为字符串的第一个字符 b 占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。
 *
 * 提示：
 * 1 <= board.length <= 200
 * 1 <= board[i].length <= 200
 *
 * 解法：回溯 (DFS)
 *
 * 递归思路：
 * 1. 记当前寻找到的字母为 board[row][col]，寻找的字母为 word[cur]；
 * 2. board[row][col] 置为空，表示这个字母已经使用防止重复访问，节省新建 visited[][] 数组的空间；
 * 3. 朝当前元素的上、下、左、右四个方向递归 (或)；
 * 4. board[row][col] 还原 word[cur] 给下一次递归。
 *
 * 递归出口：
 * 1. 失败 (剪枝)：
 * 越界；当前字母与目标字母不同；
 * 当前矩阵元素已访问过 (由于访问过的字母已置为空，因此本情况包含于不同)
 * 2. 成功：
 * board[row][col] === word[cur] && cur === word.length -1
 *
 * https://leetcode-cn.com/submissions/detail/139129194/
 */

/**
 * @param {string[][]} board
 * @param {string} word
 * @param {number} row
 * @param {number} col
 * @param {number} cur
 * @return {boolean}
 */
const _exist = (board, word, row, col, cur) => {
  // 递归出口 1：失败 (剪枝)
  if (
    row < 0 ||
    row >= board.length ||
    col < 0 ||
    col >= board[0].length ||
    board[row][col] !== word.charAt(cur)
  ) {
    return false;
  }
  // 递归出口 2：成功
  if (cur === word.length - 1) {
    return true;
  }
  // 递归过程
  board[row][col] = '';
  const res =
    _exist(board, word, row + 1, col, cur + 1) ||
    _exist(board, word, row - 1, col, cur + 1) ||
    _exist(board, word, row, col + 1, cur + 1) ||
    _exist(board, word, row, col - 1, cur + 1);
  board[row][col] = word.charAt(cur);
  return res;
};

/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (_exist(board, word, row, col, 0)) {
        return true;
      }
    }
  }
  return false;
};
