class ListNode {
  /**
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
