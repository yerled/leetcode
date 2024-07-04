function substringWithConcatenationOfAllWords(s, words) {
  if (!s || !words || !words.length) return [];

  let wordLength = words[0].length;
  let totalLength = words.length * wordLength;

  let wordCount = {};
  let result = [];

  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  for (let i = 0; i <= s.length - totalLength; i++) {
    let seen = {};
    let j = 0;
    while (j < words.length) {
      let word = s.substr(i + j * wordLength, wordLength);
      if (wordCount[word]) {
        seen[word] = (seen[word] || 0) + 1;
        if (seen[word] > wordCount[word]) {
          break;
        }
      } else {
        break;
      }
      j++;
    }
    if (j === words.length) {
      result.push(i);
    }
  }

  return result;
}
