/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 *
 * 最大子序和
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 * 解法：动态规划
 * 若至今为止的和为正数，则相加并比较；
 * 若至今为止的和为负数，则替换并比较。
 * https://leetcode-cn.com/submissions/detail/154201104/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = nums[0];
  let sum;

  for (let i = 0; i < nums.length; i++) {
    if (sum && sum >= 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    res = Math.max(res, sum);
  }

  return res;
};
