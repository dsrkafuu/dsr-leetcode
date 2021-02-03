/**
 * https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
 *
 * 对称的二叉树
 *
 * 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。
 *
 * 解法：
 * BFS (类层次遍历)；
 * 从树的第二层 (两个结点) 开始比对两棵子树 lRoot 和 rRoot；
 * 对称满足的条件 (`.val` 省略)：
 *   - lRoot === rRoot
 *   - lRoot.left === rRoot.right
 *   - lRoot.right === rRoot.left
 * 从上至下层次递归，第一次比对 L&R，第二次比对 LL&RR 和 LR&RL，类推
 *
 * https://leetcode-cn.com/submissions/detail/143409066/
 */
import { TreeNode } from '../../class/Tree.js';

/**
 * @param {TreeNode} lRoot
 * @param {TreeNode} rRoot
 * @return {boolean}
 */
const checkLR = (lRoot, rRoot) => {
  // 都为 null，则对称
  if (!lRoot && !rRoot) {
    return true;
  }
  // 一侧为 null 或值不同，则不对称
  if (!lRoot || !rRoot || lRoot.val !== rRoot.val) {
    return false;
  }
  // 向下层递归
  return checkLR(lRoot.left, rRoot.right) && checkLR(lRoot.right, rRoot.left);
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
  if (!root) {
    return true;
  }
  return checkLR(root.left, root.right);
};
