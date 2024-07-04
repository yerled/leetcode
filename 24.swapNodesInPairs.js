function swapPairs(head) {
  if (!head || !head.next) return head;
  let temp = head.next;
  head.next = swapPairs(temp.next);
  temp.next = head;
  return temp;
}
