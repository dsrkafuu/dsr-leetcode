/**
 * https://leetcode-cn.com/problems/two-sum/
 *
 * 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 你可以按任意顺序返回答案。
 *
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]。
 *
 * 解法：Map
 * https://leetcode-cn.com/submissions/detail/154561843/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    // 寻找是否有匹配的 target - current
    if (map[target - nums[i]] !== undefined) {
      return [i, map[target - nums[i]]];
    }
    // 存储 target - current
    map[nums[i]] = i;
  }
  return [];
};
