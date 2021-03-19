/**
 * https://leetcode-cn.com/problems/minimum-size-subarray-sum/
 *
 * 长度最小的子数组
 * 给定一个含有 n 个正整数的数组和一个正整数 target。
 * 找出该数组中满足其和 ≥ target 的长度最小的连续子数组 [numsl, numsl+1, ..., numsr-1, numsr]，并返回其长度。
 * 如果不存在符合条件的子数组，返回 0。
 *
 * 输入：target = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 *
 * 解法：滑动窗口
 * https://leetcode-cn.com/submissions/detail/154619850/
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 0;
  let sum = nums[0];
  if (sum >= target) {
    return 1;
  }
  let min = Infinity;

  while (left < nums.length && right < nums.length) {
    // 若大于目标，则缩小窗口并记录最小窗口大小
    if (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left];
      left++;
    }
    // 若小于目标，则尝试扩大窗口
    else {
      right++;
      sum += nums[right];
    }
  }

  return min === Infinity ? 0 : min;
};

minSubArrayLen(7, [2, 4, 3]);
