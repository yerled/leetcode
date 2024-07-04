function combinationSumII(candidates, target) {
  const result = new Set();
  const seen = {};
  function cs(candidates, target, prev) {
    console.log('~~~~~candidates, target, [...prev]', candidates, target, [
      ...prev,
    ]);

    if (candidates.length === 0) return;

    if (candidates[candidates.length - 1] * candidates.length < target) return;

    const key = candidates.join() + target + prev.join();
    if (seen[key]) return;
    seen[key] = true;

    const v = candidates.shift();

    if (target === v) {
      result.add([...prev, v].join());
    }

    if (target - v > 0) {
      cs([...candidates], target - v, [...prev, v]);
    }

    cs([...candidates], target, [...prev]);
  }

  cs(
    candidates.sort((a, b) => a - b),
    target,
    [],
  );
  return Array.from(result).map(r => r.split(',').map(Number));
}

console.log(combinationSumII([10, 1, 2, 7, 6, 1, 5], 8));
// [
//   [1,1,6],
//   [1,2,5],
//   [1,7],
//   [2,6]
//   ]
console.log(
  combinationSumII(
    [
      25, 6, 8, 5, 23, 16, 34, 13, 6, 24, 14, 11, 24, 23, 9, 24, 18, 25, 26, 17,
      26, 27, 16, 30, 12, 13, 18, 9, 24, 18, 8, 14, 19, 12, 6, 7, 15, 5, 7, 16,
      17, 16, 22, 28, 34, 19, 17, 10, 31, 9, 22, 23, 31, 34, 10, 30, 34,
    ],
    29,
  ),
);
