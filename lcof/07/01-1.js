/**
 * https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
 *
 * 重建二叉树
 *
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 *
 * 解法：递归
 * preorder[0] 是根结点，首先找到 preorder[0] 在中序遍历中的位置，
 * 中序遍历中 preorder[0] 左侧的都位于左子树，右侧的都位于右子树，由此可得到递归的左右子树的中序遍历数组。
 */
import { Tree } from '../class/Tree.js';

const tree = new Tree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
console.log(tree);
