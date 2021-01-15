class TreeNode {
  /**
   * 树结点
   * @param {any} val
   * @param {TreeNode} left
   * @param {TreeNode} right
   */
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export { TreeNode };
