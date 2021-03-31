/**
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 *
 * 数组中的第 K 个最大元素
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 *
 * 解法：基于快速排序的改进
 * https://leetcode-cn.com/submissions/detail/154631788/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
var findKthLargest = function (nums, k) {
  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // 快排分割
  function partition(left, right) {
    const base = nums[left];
    let split = left;
    for (let i = left + 1; i <= right; i++) {
      if (nums[i] < base) {
        swap(i, ++split);
      }
    }
    swap(left, split);
    return split;
  }

  function sort(left, right) {
    if (left < right) {
      const p = partition(left, right);
      // 以 p 为下标的数字位置已固定
      if (p === nums.length - k) {
        return nums[p];
      }
      // 比较 p 和所找位置的关系，仅对相关的一半进行排序
      else if (p > nums.length - k) {
        return sort(left, p - 1);
      } else {
        return sort(p + 1, right);
      }
    }
    return nums[left];
  }

  return sort(0, nums.length - 1);
};

const res = findKthLargest([2, 1], 2);
