function nQueens(n) {
  const result = [];

  function dfs(prev) {
    if (prev.length === n) {
      result.push(prev);
    }

    const row = prev.length;
    for (let i = 0; i < n; i++) {
      if (
        prev.some(
          (col, r) => col === i || Math.abs(row - r) === Math.abs(i - col),
        )
      ) {
        continue;
      }
      dfs([...prev, i]);
    }
  }

  dfs([]);

  // console.log('result', result);
  return result.length;
}

console.log('nQueens(4)', nQueens(4));
