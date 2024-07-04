const { ListNode, printList } = require('./0.utils');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (k === 1) return head;

  let resultHead = null;
  let resultTail = null;

  let remainHead = head;

  const UNLIMITED = 0;
  let prevHead = null;
  let prevTail = null;
  function process(head, count, limit) {
    if (count === 1) {
      prevTail = head;
      if (!head) {
        remainHead == null;
        return;
      }
    }

    if (limit !== UNLIMITED) {
      if (count === limit + 1) {
        if (!resultHead) {
          resultHead = prevHead;
        }
        if (resultTail) {
          resultTail.next = prevHead;
        }
        resultTail = prevTail;
        remainHead = head;
        return;
      }

      if (!head) {
        let temp = prevHead;
        prevHead = null;
        process(temp, 1, UNLIMITED);
        return;
      }
    } else {
      if (!head) {
        if (resultTail) {
          resultTail.next = prevHead;
        }
        remainHead = null;
        return;
      }
    }

    // reverse
    let temp = head.next;
    head.next = prevHead;
    prevHead = head;

    process(temp, ++count, limit);
  }

  while (remainHead) {
    console.log('while~~~');
    printList('prevHead', prevHead);
    printList('prevTail', prevTail);
    printList('resultHead', resultHead);
    printList('remainHead', remainHead);

    prevHead = null;
    prevTail = null;
    process(remainHead, 1, k);
  }

  return resultHead;
};

const node5 = { val: 5, next: null };
const node4 = { val: 4, next: node5 };
const node3 = { val: 3, next: node4 };
const node2 = { val: 2, next: node3 };
const node1 = { val: 1, next: node2 };
printList(reverseKGroup(node1, 3));
