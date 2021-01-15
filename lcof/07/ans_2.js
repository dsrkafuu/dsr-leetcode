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
 * 解法：递归 (优化)
 * preorder[0] 是根结点，首先找到 preorder[0] 在中序遍历中的位置，
 * 中序遍历中 preorder[0] 左侧的都位于左子树，右侧的都位于右子树，由此可得到递归的左右子树的中序遍历数组。
 * [优化：可以传数组头尾坐标代替 slice 生成新数组]
 * [优化：先生成结点，若无需生成左右子结点则直接返回减少一次递归]
 * [优化：可以先进行一次遍历，利用 map 保存每个结点的中序位置]
 *
 * https://leetcode-cn.com/submissions/detail/138562868/
 */
import { TreeNode } from '../../class/Tree.js';

/**
 * 内部递归
 * [优化：可以传数组头尾坐标代替 slice 生成新数组]
 * @param {number[]} preorder 先序数组
 * @param {number} i 先序数组头
 * @param {number} j 先序数组尾
 * @param {number[]} inorder
 * @param {number} u 中序数组头
 * @param {number} v 中序数组尾
 * @param {Object} map 中序数组下标映射
 * @return {TreeNode}
 */
const _buildTree = (preorder, i, j, inorder, u, v, map) => {
  // 递归出口
  if (i > j || u > v) {
    return null;
  }
  // [优化：先生成结点，若无需生成左右子结点则直接返回减少一次递归]
  const val = preorder[i]; // 获取当前 (部分树) 的根节点
  const node = new TreeNode(val);
  if (i === j || u === v) {
    return node;
  }
  // 获取根节点在中序遍历中的位置
  const index = map[val];
  const leftNum = index - u; // 左子树结点个数
  const rightNum = v - index; // 右子树结点个数
  // 递归生成左子树
  node.left = _buildTree(preorder, i + 1, i + leftNum, inorder, u, index - 1, map);
  // 递归生成右子树
  node.right = _buildTree(preorder, j - rightNum + 1, j, inorder, index + 1, v, map);
  return node;
};

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
  if (!preorder.length || !inorder.length) {
    return null;
  }
  // [优化：可以先进行一次遍历，利用 map 保存每个结点的中序位置]
  const map = {};
  inorder.forEach((val, index) => {
    map[val] = index;
  });
  // 内部递归
  const length = preorder.length;
  return _buildTree(preorder, 0, length - 1, inorder, 0, length - 1, map);
};

// DEBUG
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
console.log(buildTree([1, 2, 3], [3, 2, 1]));
