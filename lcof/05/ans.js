/**
 * https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 *
 * 替换空格
 *
 * 请实现一个函数，把字符串 s 中的每个空格替换成 "%20"。
 *
 * 限制：
 *
 * 0 <= s 的长度 <= 10000
 *
 * https://leetcode-cn.com/submissions/detail/138350073/
 */

/**
 * @param {string} s
 * @returns {string}
 */
const replaceSpace = (s) => s.replace(/ /gi, '%20');
