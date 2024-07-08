function rotateImage(matrix) {
  const n = matrix.length;
  const rows = Math.ceil(n / 2);
  for (let i = 0; i < rows; i++) {
    for (let j = i; j < n - i - 1; j++) {
      [
        matrix[i][j],
        matrix[j][n - 1 - i],
        matrix[n - 1 - i][n - 1 - j],
        matrix[n - 1 - j][i],
      ] = [
        matrix[n - 1 - j][i],
        matrix[i][j],
        matrix[j][n - 1 - i],
        matrix[n - 1 - i][n - 1 - j],
      ];
    }
  }
  return matrix;
}
