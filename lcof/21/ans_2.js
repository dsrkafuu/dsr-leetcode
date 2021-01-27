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
 * 解法 2：
 * 排序；
 * 排序函数结果：
 *   - 小于 0 则 a 在前
 *   - 大于 0 则 b 在前
 * (b % 2) - (a % 2)：
 *   - a 寄 b 偶，结果为 -1，a 在前
 *   - b 奇 a 偶，结果为 1，b 在前
 * 即排序函数等价为需要交换时返回大于 0
 *
 * https://leetcode-cn.com/submissions/detail/141555301/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const exchange = (nums) => nums.sort((a, b) => (b % 2) - (a % 2));

// DEBUG
console.log(exchange([4, 6, 8, 1, 3, 5]));
console.log(exchange([4, 3, 1, 5, 6, 8]));
console.log(exchange([1, 3, 5, 7]));
console.log(exchange([2, 4, 6, 8]));
