function minWindow(s, t) {
  let need = new Map(),
    window = new Map();
  for (let char of t) {
    need.set(char, (need.get(char) || 0) + 1);
  }

  let valid = 0;
  let minLen = Infinity;
  let minStart = 0;
  let left = 0,
    right = 0;

  while (right < s.length) {
    let c = s[right];
    window.set(c, (window.get(c) || 0) + 1);

    if (need.has(c) && window.get(c) == need.get(c)) {
      valid++;
    }

    while (left <= right && valid === need.size) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minStart = left;
      }

      let cleft = s[left];
      window.set(cleft, window.get(cleft) - 1);
      if (need.has(cleft) && window.get(cleft) < need.get(cleft)) {
        valid--;
      }

      left++;
    }

    right++;
  }

  return minLen === Infinity ? '' : s.substring(minStart, minStart + minLen);
}
