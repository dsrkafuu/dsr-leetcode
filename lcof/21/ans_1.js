/**
 * https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
 *
 * 调整数组顺序使奇数位于偶数前面
 *
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
 *
 * 限制：
 * 1 <= nums.length <= 50000
 * 1 <= nums[i] <= 10000
 *
 * 解法 1：
 * 双指针；
 * i 从头开始，j 从尾开始；
 * i++ 至偶数，j-- 至奇数；
 * 交换，递归 (迭代)。
 *
 * https://leetcode-cn.com/submissions/detail/141552993/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const exchange = (nums) => {
  if (nums.length > 1) {
    let i = 0;
    let j = nums.length - 1;
    while (true) {
      // nums[i] 为奇数则 i++
      while (nums[i] !== undefined && nums[i] % 2) {
        i++;
      }
      // nums[j] 为偶数则 j--
      while (nums[j] !== undefined && !(nums[j] % 2)) {
        j--;
      }
      // 越界检查
      if (i >= j) {
        break;
      }
      // 交换
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  return nums;
};

// DEBUG
console.log(exchange([4, 6, 8, 1, 3, 5]));
console.log(exchange([4, 3, 1, 5, 6, 8]));
console.log(exchange([1, 3, 5, 7]));
console.log(exchange([2, 4, 6, 8]));
