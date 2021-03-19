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

class Tree {
  /**
   * 根据序列或先中序数组建立二叉树
   * @param {Array} arr 序列化二叉树数组或先序遍历数组
   * @param {Array} inarr 可选中序遍历数组
   */
  constructor(arr, inarr) {
    this.root = null;

    if (arr.length > 0) {
      // 根据先中序数组建立二叉树
      if (inarr) {
        this.root = this.buildArray(arr, inarr);
      }
      // 根据节点序列建立二叉树
      else {
        this.root = this.buildSerial(arr);
      }
    }
  }

  /**
   * @param {Array} prearr 先序数组
   * @param {Array} inarr 中序数组
   */
  buildArray(prearr, inarr) {
    if (!prearr.length || !inarr.length) {
      return null;
    }
    // 当前根节点
    const val = prearr[0];
    const node = new TreeNode(val);
    // 节点在中序中的位置
    const idx = inarr.indexOf(val);
    // 左右子树递归
    node.left = this.buildArray(prearr.slice(1, idx + 1), inarr.slice(0, idx));
    node.right = this.buildArray(prearr.slice(idx + 1), inarr.slice(idx + 1));
    return node;
  }

  /**
   * @param {Array} arr
   */
  buildSerial(arr) {
    let idx = 0;
    // 根节点
    const root = new TreeNode(arr[idx]);
    // 工作队列
    const queue = [];
    queue.push(root);
    while (idx !== arr.length - 1 && queue.length > 0) {
      const node = queue.shift();
      // 尝试添加左右子结点
      const left = arr[++idx];
      const right = arr[++idx];
      if (left !== null) {
        node.left = new TreeNode(left);
        queue.push(node.left);
      }
      if (right !== null) {
        node.right = new TreeNode(right);
        queue.push(node.right);
      }
    }
    this.root = root;
  }
}

export { TreeNode, Tree };
