/**
 * 二叉树的层序遍历
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 */

/**
 * @param {TreeNode} root
 * @returns {number[][]}
 */
var levelOrder = function (root) {
  const ret = [];
  if (!root) {
    return ret;
  }

  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const floor = [];
    ret.push(floor);
    let length = queue.length;
    while (length-- > 0) {
      const node = queue.shift();
      floor.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return ret;
};
