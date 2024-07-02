function longestPalindromicSubstring(s) {
  let result = '';

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }

  for (let i = 0; i < s.length; i++) {
    let odd = expandAroundCenter(i, i);
    let even = expandAroundCenter(i, i + 1);
    let current = odd.length > even.length ? odd : even;
    if (current.length > result.length) {
      result = current;
    }
  }

  return result;
}
