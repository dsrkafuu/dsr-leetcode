/**
 * https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
 *
 * 旋转数组的最小数字
 *
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。
 *
 * 示例 1：
 *
 * 输入：[3,4,5,1,2]
 * 输出：1
 *
 * 示例 2：
 *
 * 输入：[2,2,2,0,1]
 * 输出：0
 *
 * 解法：二分
 *
 * https://leetcode-cn.com/submissions/detail/138791609/
 */

/**
 * @param {number[]} numbers
 * @returns {number}
 */
const minArray = (numbers) => {
  let l = 0;
  let r = numbers.length - 1;
  while (l < r) {
    const m = ((r - l) >> 1) + l; // 中位
    // 只要最右元素比中间元素大，说明右边一定有序，排除 m+1 到 r
    if (numbers[r] > numbers[m]) {
      r = m;
    }
    // 最右元素比中间元素小，下降点在右边，排除 l 到 m (m 不可能为最小，至少为 m+1)
    else if (numbers[r] < numbers[m]) {
      l = m + 1;
    }
    // 最右元素和中间元素相同，去重
    // 此步解决了类似 [1, 1, 1] 和 [10, 1, 10, 10, 10] 此类的问题
    // 最坏情况下时间复杂度变为 O(n)
    else {
      r--;
    }
  }
  return numbers[l];
};

// DEBUG
console.log(minArray([3, 4, 5, 1, 2]));
console.log(minArray([2, 2, 2, 0, 1]));
console.log(minArray([1, 2, 3]));
console.log(minArray([1, 1, 1]));
console.log(minArray([1]));
console.log(minArray([10, 1, 10, 10, 10]));
