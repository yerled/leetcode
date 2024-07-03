module.exports = {
  ListNode: function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  },
  printList: function printList(label, head) {
    if (typeof label !== 'string') {
      head = label;
      label = 'list';
    }
    const result = [];
    while (head) {
      result.push(head.val);
      head = head.next;
    }
    console.log(label, result);
  },
};
