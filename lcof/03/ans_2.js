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
 * 解法 2：
 *
 * In-place 方法；
 * nums 里的所有数字都在 0～n-1 的范围内；
 * 记工作指针 i 初值为 0；
 * 对 nums[i] 进行判断，如果 nums[i] === i，说明下标为 i 的数据正确的放在了正确的位置上，i++；
 * 如果 nums[i] !== i，交换 nums[i] 和 nums[nums[i]] 将其放到正确的位置上；
 * 交换之后如果依旧 nums[i] !== i，则继续交换；
 * 交换时如果 nums[i] === nums[nums[i]]，即找到重复元素。
 *
 * https://leetcode-cn.com/submissions/detail/137890828/
 */

/**
 * @param {Array} arr
 * @param {number} a
 * @param {number} b
 * @return {boolean}
 */
function swap(arr, a, b) {
  if (arr[a] === arr[b]) {
    return false;
  }
  [arr[a], arr[b]] = [arr[b], arr[a]];
  return true;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const findRepeatNumber = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    // 下标为 i 的数据正确的放在了正确的位置上
    if (nums[i] === i) {
      continue;
    }
    // nums[i] !== i 则一直交换 nums[i] 和 nums[nums[i]]
    while (nums[i] !== i) {
      // 交换时如果 nums[i] === nums[nums[i]]，即找到重复元素
      if (!swap(nums, i, nums[i])) {
        return nums[i];
      }
      // 继续交换或下一位
    }
  }
  return NaN;
};

// DEBUG
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
