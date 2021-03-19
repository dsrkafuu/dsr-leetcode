/**
 * https://leetcode-cn.com/problems/path-sum/
 *
 * 路径总和
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum，
 * 判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和 targetSum。
 *
 * 解法：DFS (递归)
 * https://leetcode-cn.com/submissions/detail/155437532/
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }

  // 已到达叶子
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }
  // 递归查找
  return (
    hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
  );
};
