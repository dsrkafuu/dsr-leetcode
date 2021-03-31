/**
 * https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
 *
 * 求根到叶子节点数字之和
 * 给你一个二叉树的根节点 root，树中每个节点都存放有一个 0 到 9 之间的数字。
 * 每条从根节点到叶节点的路径都代表一个数字：
 * 计算从根节点到叶节点生成的所有数字之和。
 *
 * 解法：DFS (递归)
 * https://leetcode-cn.com/submissions/detail/153953617/
 */

/**
 * @param {TreeNode} root
 * @returns {number}
 */
var sumNumbers = function (root) {
  let sum = 0;

  function add(node, num) {
    if (!node) {
      return;
    }
    num = num * 10 + node.val;
    if (!node.left && !node.right) {
      sum += num;
    }
    add(node.left, num);
    add(node.right, num);
  }
  add(root, 0);

  return sum;
};
