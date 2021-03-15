/**
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 *
 * 无重复字符的最长子串
 * 给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。
 *
 * 解法：滑动窗口
 * https://leetcode-cn.com/submissions/detail/154588173/
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) {
    return 0;
  }

  // 滑动窗口 [left, right]
  let max = 1;
  let left = 0;
  let right = 0;
  const charSet = new Set();
  charSet.add(s.charAt(0));

  while (left < s.length) {
    if (left !== 0) {
      // 左指针右移则移除最左侧字符
      charSet.delete(s.charAt(left - 1));
    }
    // 右指针持续右移直到出现重复字符
    while (right + 1 < s.length && !charSet.has(s.charAt(right + 1))) {
      charSet.add(s.charAt(right + 1));
      right++;
    }
    max = Math.max(max, right - left + 1);
    left++;
  }

  return max;
};
