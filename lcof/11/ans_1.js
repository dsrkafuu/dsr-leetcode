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
 * 解法：遍历
 *
 * https://leetcode-cn.com/submissions/detail/138780412/
 */

/**
 * @param {number[]} numbers
 * @return {number}
 */
const minArray = (numbers) => {
  const length = numbers.length;
  // 数组有下降项 (旋转)
  for (let i = 0; i < length; i++) {
    const j = i + 1;
    // 仅一个元素 或 全元素相同 或 数组已为递增
    if (j === length) {
      return numbers[0];
    }
    // 正常情况
    if (numbers[i] > numbers[j]) {
      return numbers[j];
    }
  }
  return NaN;
};
