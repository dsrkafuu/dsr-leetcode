/**
 * https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
 *
 * 树的子结构
 *
 * 输入两棵二叉树 A 和 B，判断 B 是不是 A 的子结构。
 * 约定空树不是任意一个树的子结构。
 *
 * 解法：
 * DFS (先序遍历)：
 * 1. 判断操作 (相同根节点子结构)：
 * 设当前根结点为 root，判断当前以 root 为根的树是否包含 B 这样的子结构 (同根)；
 *   - 判断当前结点：root 与 B 是否相等
 *   - 递归判断 root.left 与 B.left 是否相等
 *   - 递归判断 root.right 与 B.right 是否相等
 * 递归终止条件：
 *   - B 为空，即子结构已经遍历比对完成，匹配成功
 *   - root 为空，子结构还未检查完 root 树先空，匹配失败
 *   - root 与 B 不等，匹配失败
 * 2. 外层遍历
 * 先序遍历 A 树的每个结点作为 root，执行以上的判断操作：
 *   - 一旦出现返回值为 true 即匹配成功
 *   - 否则按照先序遍历的顺序递归
 * 可以使用 || 运算符完成
 *
 * https://leetcode-cn.com/submissions/detail/143400989/
 */
import { TreeNode } from '../../class/Tree.js';

/**
 * 判断操作 (相同根节点子结构)
 * @param {TreeNode} aRoot
 * @param {TreeNode} bRoot 同根子结构
 * @returns {boolean}
 */
const checkRootSame = (aRoot, bRoot) => {
  // B 为空，即子结构已经遍历比对完成，匹配成功
  if (!bRoot) {
    return true;
  }
  // root 为空，子结构还未检查完 root 树先空，匹配失败
  // 判断当前结点：root 与 B 是否相等
  // root 与 B 不等，匹配失败
  if (!aRoot || aRoot.val !== bRoot.val) {
    return false;
  }
  // 递归判断
  return checkRootSame(aRoot.left, bRoot.left) && checkRootSame(aRoot.right, bRoot.right);
};

/**
 * 外层遍历 (先序遍历 A 树的每个结点作为 root)
 * @param {TreeNode} A
 * @param {TreeNode} B 子结构
 * @returns {boolean}
 */
const isSubStructure = (A, B) => {
  if (!A || !B) {
    return false;
  }
  // 先序遍历 (断言)
  return checkRootSame(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};
