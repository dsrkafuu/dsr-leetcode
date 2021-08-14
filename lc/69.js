/**
 * https://leetcode-cn.com/problems/sqrtx/
 *
 * x 的平方根 (改)
 *
 * 解法：二分法
 * 起始区间是 [1,x)
 * x 在 [1,x/2) [x/2,x) 两个区间
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) {
    return 0;
  }

  let left = 1;
  let right = x;
  // 退出条件为精度
  while (right - left > 0.000001) {
    const mid = (left + right) / 2;
    if (mid ** 2 > x) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return left;
};

mySqrt(4);
