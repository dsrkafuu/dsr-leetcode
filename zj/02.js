/**
 * https://leetcode-cn.com/problems/merge-sorted-array/
 *
 * 合并有序数组
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 * 你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
 *
 * 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 输出：[1,2,2,3,5,6]
 *
 * 解法：从后往前选择插入
 * https://leetcode-cn.com/submissions/detail/154554056/
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let idx = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] <= nums2[p2]) {
      nums1[idx--] = nums2[p2--];
    } else {
      nums1[idx--] = nums1[p1--];
    }
  }

  while (p1 >= 0) {
    nums1[idx--] = nums1[p1--];
  }
  while (p2 >= 0) {
    nums1[idx--] = nums2[p2--];
  }
};
