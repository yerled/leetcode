function wordSearch(board, word) {
  let rows = board.length;
  let cols = board[0].length;
  let visited = new Array(rows)
    .fill(false)
    .map(() => new Array(cols).fill(false));

  function dfs(i, j, index) {
    if (index === word.length) return true;
    if (
      i < 0 ||
      i >= rows ||
      j < 0 ||
      j >= cols ||
      visited[i][j] ||
      board[i][j] !== word[index]
    )
      return false;
    visited[i][j] = true;
    if (
      dfs(i + 1, j, index + 1) ||
      dfs(i - 1, j, index + 1) ||
      dfs(i, j + 1, index + 1) ||
      dfs(i, j - 1, index + 1)
    )
      return true;
    visited[i][j] = false;
    return false;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  return false;
}
