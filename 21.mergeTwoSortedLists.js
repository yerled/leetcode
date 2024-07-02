function mergeTwoSortedLists(list1, list2) {
  let dummy = new ListNode(-1);
  let head = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      head.next = list1;
      list1 = list1.next;
    } else {
      head.next = list2;
      list2 = list2.next;
    }
    head = head.next;
  }
  head.next = list1 || list2;
  return dummy.next;
}
