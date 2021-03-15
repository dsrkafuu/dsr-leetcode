/**
 * https://leetcode-cn.com/problems/compare-version-numbers/
 *
 * 比较版本号
 * 如果 version1 > version2 返回 1；
 * 如果 version1 < version2 返回 -1；
 * 除此之外返回 0。
 * 无视前导 0，并且未指定的修订号视为 0。
 *
 * https://leetcode-cn.com/submissions/detail/155456454/
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1 = version1.split('.');
  const v2 = version2.split('.');
  const length = Math.max(v1.length, v2.length);

  for (let i = 0; i < length; i++) {
    const n1 = Number(v1[i]) || 0;
    const n2 = Number(v2[i]) || 0;
    if (n1 > n2) {
      return 1;
    }
    if (n1 < n2) {
      return -1;
    }
  }
  return 0;
};
