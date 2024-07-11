function editDistance(word1, word2) {
  const seen = {};
  const globalWord1 = word1;
  const globalWord2 = word2;
  const max = Math.max(word1.length, word2.length);
  function dp(i, j, sum) {
    if (seen[`${i}-${j}`] !== undefined) {
      return seen[`${i}-${j}`];
    }

    const word1 = globalWord1.slice(i);
    const word2 = globalWord2.slice(j);

    if (word1.length === 0 || word2.length === 0) {
      seen[`${i}-${j}`] = Math.max(word1.length, word2.length);
      return seen[`${i}-${j}`];
    }

    if (sum >= max) {
      return max;
    }

    seen[`${i}-${j}`] = Math.min(
      word1[0] === word2[0]
        ? dp(i + 1, j + 1, sum)
        : 1 + dp(i + 1, j + 1, sum + 1),
      1 + dp(i + 1, j, sum + 1),
      1 + dp(i, j + 1, sum + 1),
    );

    return seen[`${i}-${j}`];
  }
  return dp(0, 0, 0);
}

const case1 = ['horse', 'ros']; // 3
const case2 = ['intention', 'execution']; // 5
const case3 = ['prosperity', 'properties']; // 4
const case4 = ['xabcde', 'eabcdx']; // 2
const case5 = [
  'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdef',
  'bcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefg',
]; // 2
const case6 = ['a', 'b']; // 1
const case7 = ['distance', 'springbok']; // 9
console.log(...case1, editDistance(...case1));
console.log(...case2, editDistance(...case2));
console.log(...case3, editDistance(...case3));
console.log(...case4, editDistance(...case4));
console.log(...case5, editDistance(...case5));
console.log(...case6, editDistance(...case6));
console.log(...case7, editDistance(...case7));
