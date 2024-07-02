function zigzagConversion(s, numRows) {
  if (numRows === 1) return s;

  const res = [];
  const unitLen = numRows * 2 - 2;
  const times = Math.ceil(s.length / unitLen);

  for (let i = 0; i < times; i++) {
    for (let j = 0; j < unitLen; j++) {
      const index = i * unitLen + j;
      if (index < s.length) {
        const row = j < numRows ? j : unitLen - j;
        res[row] = (res[row] || '') + s[index];
      }
    }
  }

  return res.join('');
}

const inputString = 'PAYPALISHIRING';
const numRows = 4;
const result = zigzagConversion(inputString, numRows);
console.log(result);
