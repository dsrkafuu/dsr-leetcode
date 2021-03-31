/**
 * https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 *
 * 数组中重复的数字
 *
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
 * 请找出数组中任意一个重复的数字。
 *
 * 示例 1：
 *
 * 输入：[2, 3, 1, 0, 2, 5, 3]
 * 输出：2 或 3
 *
 * 限制：
 *
 * 2 <= n <= 100000
 *
 * 解法 1：
 *
 * 遍历 + set，哈希原使用 Set 或对象实现；
 * 本题可以使用一个大小为 n 的数组代替。
 *
 * https://leetcode-cn.com/submissions/detail/137886172/
 */

/**
 * @param {number[]} nums
 * @returns {number}
 */
const findRepeatNumber = (nums) => {
  // set
  const set = new Array(nums.length);
  // 遍历
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]; // 当前数字
    if (set[num]) {
      return num;
    }
    set[num] = true;
  }
  return NaN;
};

// DEBUG
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
