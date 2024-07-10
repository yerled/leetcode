function uniquePaths(m, n) {
  const seen = {};
  function bt(m, n) {
    if (m === 1 || n === 1) return 1;
    if (seen[`${m}-${n}`]) return seen[`${m}-${n}`];
    if (seen[`${n}-${m}`]) return seen[`${n}-${m}`];
    seen[`${m}-${n}`] = bt(m - 1, n) + bt(m, n - 1);

    return seen[`${m}-${n}`];
  }

  return bt(m, n);
}

console.log(uniquePaths(3, 2));
console.log(uniquePaths(51, 9));
