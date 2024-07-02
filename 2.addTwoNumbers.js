/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function addTwoNumbers(l1, l2) {
  let dummy = new ListNode();
  let result = new ListNode();
  const resultHead = result;

  while (l1 !== null || l2 !== null) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + (dummy.val || 0);

    result.val = sum % 10;
    dummy.next = new ListNode(sum >= 10 ? 1 : 0);

    dummy = dummy.next;
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;

    if (l1 !== null || l2 !== null) {
      result.next = new ListNode();
      result = result.next;
    }
  }

  if (dummy.val) {
    result.next = new ListNode(dummy.val);
  }

  return resultHead;
}

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];
console.log(addTwoNumbers(l1, l2)); // [7, 0, 8]
