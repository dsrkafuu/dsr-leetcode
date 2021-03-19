/**
 * https://leetcode-cn.com/problems/permutations/
 *
 * 全排列
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 *
 * 解法：回溯 (递归)
 * https://leetcode-cn.com/submissions/detail/155427869/
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const ret = [];

  /**
   * @param {number} a
   * @param {number} b
   */
  function swap(a, b) {
    [nums[a], nums[b]] = [nums[b], nums[a]];
  }

  /**
   * @param {number} from
   * @param {number} to
   */
  function perm(from, to) {
    // 所有数已选定完成
    if (from === to) {
      ret.push([...nums]);
      return;
    }
    // 仍有未选定部分
    for (let i = from; i <= to; i++) {
      // 选定 from 位置的数字
      swap(from, i);
      // 递归选定
      perm(from + 1, to);
      // 还原 from 位置的数字
      swap(from, i);
    }
  }
  perm(0, nums.length - 1);

  return ret;
};
