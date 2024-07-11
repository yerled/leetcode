function combinations(n, k) {
  let result = [];
  function dfs(arr, start) {
    if (arr.length === k) {
      result.push([...arr]);
      return;
    }

    for (let i = start; i <= n; i++) {
      arr.push(i);
      dfs(arr, i + 1);
      arr.pop();
    }
  }

  dfs([], 1);
  return result;
}
