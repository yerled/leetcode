function setMatrixZeros(matrix) {
  const m = matrix[0].length;
  const n = matrix.length;

  const rows = new Set();
  const cols = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (rows.has(i) || cols.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}
