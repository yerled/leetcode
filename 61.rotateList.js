function rotaList(head, k) {
  if (head === null || !head.next) return head;

  let total = k;

  let len = 0;
  let cur = head;
  while (cur) {
    len += 1;
    cur = cur.next;
  }

  function rotateToLeft(head, k) {
    let cur = head;
    let result = null;
    let last;

    while (cur) {
      if (k == 0) {
        result = cur;
        last.next = null;
      }

      k--;

      last = cur;
      cur = cur.next;
    }

    cur = result;
    while (cur.next) {
      cur = cur.next;
    }
    cur.next = head;

    return result;
  }

  if (total % len === 0) {
    return head;
  }

  return rotateToLeft(head, len - (total % len));
}
