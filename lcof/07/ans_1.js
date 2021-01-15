/**
 * https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
 *
 * 重建二叉树
 *
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 *
 * 示例：
 *
 * 输入：
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 * 输出：
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 *
 * 限制：
 *
 * 0 <= 节点个数 <= 5000
 *
 * 解法：递归
 * preorder[0] 是根结点，首先找到 preorder[0] 在中序遍历中的位置，
 * 中序遍历中 preorder[0] 左侧的都位于左子树，右侧的都位于右子树，由此可得到递归的左右子树的中序遍历数组。
 *
 * https://leetcode-cn.com/submissions/detail/138552016/
 */
import { TreeNode } from '../../class/Tree.js';

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
  // 递归出口
  if (!preorder.length || !inorder.length) {
    return null;
  }
  // 获取当前 (部分树) 的根节点
  const val = preorder[0];
  // 获取根节点在中序遍历中的位置
  // [优化：可以先进行一次遍历，利用 map 保存每个结点的中序位置]
  const index = inorder.indexOf(val);
  // 递归生成左子树
  // [优化：可以传数组头尾坐标代替 slice 生成新数组]
  const left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  // 递归生成右子树
  // [优化：可以传数组头尾坐标代替 slice 生成新数组]
  const right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
  // 构建当前根节点
  const node = new TreeNode(val, left, right);
  return node;
};

// DEBUG
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
