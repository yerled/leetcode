function spiralMatrix(matrix) {
  const m = matrix[0].length;
  const n = matrix.length;

  let t = 0;

  const result = [];

  while (true) {
    for (let i = t; i < m - t; i++) {
      console.log('~t,i', t, i);
      result.push(matrix[t][i]);
    }
    for (let i = t + 1; i < n - 1 - t; i++) {
      console.log('~~t,i', t, i);
      result.push(matrix[i][m - 1 - t]);
    }

    for (let i = m - t - 1; i >= t; i--) {
      console.log('~~~t,i', t, i);
      result.push(matrix[n - 1 - t][i]);
    }

    for (let i = n - 2 - t; i >= t + 1; i--) {
      console.log('~~~~t,i', t, i);
      result.push(matrix[i][t]);
    }

    if (result.length >= m * n) {
      return result.slice(0, m * n);
    }

    t++;
  }
}

console.log(
  spiralMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
