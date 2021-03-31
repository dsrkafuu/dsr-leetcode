/**
 * https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof/
 *
 * 正则表达式匹配
 *
 * 请实现一个函数用来匹配包含 '.' 和 '*' 的正则表达式。
 * 在本题中，匹配是指字符串的所有字符匹配整个模式。
 * 例如，字符串 "aaa" 与模式 "a.a" 和 "ab*ac*a" 匹配，但与 "aa.a" 和 "ab*a" 均不匹配。
 *
 * 限制：
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母以及字符 '.' 和 '*'，无连续的 '*'。
 *
 * https://leetcode-cn.com/submissions/detail/141544251/
 */

/**
 * @param {string} s
 * @param {string} p
 * @returns {boolean}
 */
const isMatch = (s, p) => Boolean(new RegExp(`^${p}$`).exec(s));
