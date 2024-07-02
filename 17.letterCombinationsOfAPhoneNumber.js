function letterCombinations(digits) {
  if (digits.length === 0) return [];
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const res = [];
  const dfs = str => {
    if (str.length === digits.length) {
      res.push(str);
      return;
    }

    const digit = digits[str.length];

    for (const letter of map[digit]) {
      dfs(str + letter);
    }
  };
  dfs('');
  return res;
}

function letterCombinations(digits) {
  if (digits.length === 0) return [];
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  let res = [];

  for (const c of digits) {
    if (res.length === 0) {
      res.push(...map[c]);
    } else {
      const temp = [];
      for (const r of res) {
        for (const m of map[c]) {
          temp.push(r + m);
        }
      }
      res = temp;
    }
  }
  return res;
}
