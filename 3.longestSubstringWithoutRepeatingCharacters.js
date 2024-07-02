function longestSubstringWithoutRepeatingCharacters(s) {
  let start = 0;
  let maxLength = 0;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      start = Math.max(map.get(s[i]) + 1, start);
    }
    maxLength = Math.max(maxLength, i - start + 1);
    map.set(s[i], i);
  }
  return maxLength;
}
