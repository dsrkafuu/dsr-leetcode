/**
 * https://leetcode-cn.com/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/
 *
 * 表示数值的字符串
 *
 * 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
 * 例如，字符串"+100"、"5e2"、"-123"、"3.1416"、"-1E-16"、"0123"都表示数值，
 * 但"12e"、"1a3.14"、"1.2.3"、"+-5"及"12e+5.4"都不是。
 *
 * https://leetcode-cn.com/submissions/detail/141547960/
 */

/**
 * @param {string} s
 * @returns {boolean}
 */
const isNumber = (s) => {
  s = s.trim();
  if (!s) {
    return false;
  }
  return !Number.isNaN(Number(s));
};

// DEBUG
console.log(isNumber('12e'));
console.log(isNumber('1a3.14'));
console.log(isNumber('1.2.3'));
console.log(isNumber('+-5'));
console.log(isNumber('12e+5.4'));
console.log(isNumber(''));
console.log(isNumber(' '));
