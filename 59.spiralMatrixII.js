function spiralMatrixII(n) {
  let num = 0;

  let result = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i <= n / 2; i++) {
    for (let j = i; j < n - i; j++) {
      num++;
      result[i][j] = num;
      if (num === n * n) return result;
    }
    for (let j = i + 1; j < n - 1 - i; j++) {
      num++;
      result[j][n - 1 - i] = num;
    }
    for (let j = i; j < n - i; j++) {
      num++;
      result[n - 1 - i][n - 1 - j] = num;
    }
    for (let j = i + 1; j < n - 1 - i; j++) {
      num++;
      result[n - 1 - j][i] = num;
    }
  }
  return result;
}
