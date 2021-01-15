class ListNode {
  /**
   * 链表结点
   * @param {any} val
   * @param {ListNode} next
   */
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class List {
  /**
   * 使用数组构建链表
   * @param {Array} arr
   */
  constructor(arr) {
    if (Array.isArray(arr) && arr.length > 0) {
      this.head = new ListNode(arr[0]);
      let worker = this.head;
      for (let i = 1; i < arr.length; i++) {
        const node = new ListNode(arr[i]);
        worker.next = node;
        worker = node;
      }
    } else {
      this.head = null;
    }
  }
}

export { ListNode, List };
