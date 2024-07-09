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
  return result.map(res => {
    const data = new Array(n).fill('.').map(_ => new Array(n).fill('.'));
    // console.log('data', data);
    // console.log('res', res);
    res.forEach((col, r) => (data[r][col] = 'Q'));
    // console.log('data', data);
    return data.map(e => e.join(''));
  });
}

console.log('nQueens(4)', nQueens(4));
