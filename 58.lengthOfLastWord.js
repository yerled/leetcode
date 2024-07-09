function lengthOfLastWord(s) {
  let lastLen = 0;
  let len = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      len++;
    } else {
      lastLen = len === 0 ? lastLen : len;
      len = 0;
    }
  }
  lastLen = len === 0 ? lastLen : len;
  return maxLen;
}

console.log(lengthOfLastWord('luffy is still joyboy'));
