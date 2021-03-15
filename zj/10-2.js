/**
 * https://leetcode-cn.com/problems/path-sum/
 *
 * 路径总和
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum，
 * 判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和 targetSum。
 *
 * 解法：BFS (递归)
 * https://leetcode-cn.com/submissions/detail/155443557/
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

  const nodeQueue = [];
  const sumQueue = [];
  nodeQueue.push(root);
  sumQueue.push(root.val);

  while (nodeQueue.length > 0) {
    const node = nodeQueue.shift();
    const sum = sumQueue.shift();
    // 若为叶子结点
    if (!node.left && !node.right) {
      if (sum === targetSum) {
        return true;
      }
    }
    // 不为叶子则继续遍历
    else {
      if (node.left) {
        nodeQueue.push(node.left);
        sumQueue.push(sum + node.left.val);
      }
      if (node.right) {
        nodeQueue.push(node.right);
        sumQueue.push(sum + node.right.val);
      }
    }
  }
  return false;
};
