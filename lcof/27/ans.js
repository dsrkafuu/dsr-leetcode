/**
 * https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/
 *
 * 二叉树的镜像
 *
 * 请完成一个函数，输入一个二叉树，该函数输出它的镜像。
 *
 * 解法：DFS (后序遍历)
 *
 * https://leetcode-cn.com/submissions/detail/143404579/
 */
import { TreeNode } from '../../class/Tree.js';

/**
 * @param {TreeNode} root
 * @returns {TreeNode}
 */
const mirrorTree = (root) => {
  if (!root || (!root.left && !root.right)) {
    return null;
  }
  mirrorTree(root.left);
  mirrorTree(root.right);
  if (root.left || root.right) {
    [root.left, root.right] = [root.right, root.left];
  }
  return root;
};
