/**
 * https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/
 *
 * 机器人的运动范围
 *
 * 地上有一个 m 行 n 列的方格，从坐标 [0, 0] 到坐标 [m-1, n-1]。
 * 一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格。
 * 不能移动到方格外，也不能进入行坐标和列坐标的数位之和大于 k 的格子。
 * 例如，当 k 为 18 时，机器人能够进入方格 [35, 37] ，因为 3+5+3+7=18。
 * 但它不能进入方格 [35, 38]，因为3+5+3+8=19。
 * 请问该机器人能够到达多少个格子？
 *
 * 限制：
 * 1 <= n,m <= 100
 * 0 <= k <= 20
 *
 * 解法：回溯 (DFS)
 *
 * 本题与 12 题基本思路一致。
 * - 数位和计算：对 10 取余可以将将数字右移一位，若为限制中的 10-99 则可获得个位，循环相加即可；
 * - DFS 递归搜索：
 *   由于访问元素具有数位和的限制，因此可达解 (格子) 在矩阵中的分布为以上、左为腰的等腰三角形，
 *   易推出机器人可仅通过向右和向下移动，访问所有可达解。
 *
 * 递归思路
 * 1. 记当前数字为 [i][j]；
 * 2. visited[i][j] 置为 true，表示此处已访问过；
 * 3. 朝当前元素的右、下两个方向递归 (相加)；
 * 4. 返回 1+右、下递归结果和 给下一次递归。
 *
 * 递归出口：
 * 越界；数位和大于 k；
 * 当前矩阵元素已访问过，遇到已访问过的元素时返回 0，即不增加可行解 (格子)；
 *
 * https://leetcode-cn.com/submissions/detail/139357849/
 */

/**
 * 数位和计算
 * @param {number} num
 * @param {Object} map 计算缓存
 * @returns {number}
 */
const sum = (num, map) => {
  if (map[num] !== undefined) {
    return map[num];
  }
  let sum = 0;
  let bak = num;
  while (num !== 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  map[bak] = sum;
  return sum;
};

/**
 * @param {number} i
 * @param {number} j
 * @param {Object} params
 * @returns {number}
 */
const _movingCount = (i, j, params) => {
  const { m, n, k, visited, map } = params;
  // 越界；数位和过大；已访问
  if (i >= m || j >= n || sum(i, map) + sum(j, map) > k || visited[i][j]) {
    return 0;
  }
  // 标记这个格子为可行解
  visited[i][j] = true;
  // 递归计算
  return 1 + _movingCount(i + 1, j, params) + _movingCount(i, j + 1, params);
};

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */
const movingCount = (m, n, k) => {
  // 全局参数
  const params = {
    m,
    n,
    k,
    // 已访问记录
    visited: (() => {
      const arr = new Array(m);
      for (let i = 0; i < m; i++) {
        arr[i] = new Array(n);
      }
      return arr;
    })(),
    // 数位和缓存
    map: {},
  };
  return _movingCount(0, 0, params);
};

// DEBUG
console.log(movingCount(2, 3, 1));
console.log(movingCount(3, 1, 0));
