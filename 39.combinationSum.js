function combinationSum(candidates, target) {
  const result = new Set();
  function cs(candidates, target, prev) {
    console.log('~~~~~candidates, target, [...prev]', candidates, target, [
      ...prev,
    ]);
    if (candidates.length === 0) return;

    const v = candidates.shift();

    if (target % v === 0) {
      result.add([...prev, ...new Array(target / v).fill(v)].join());
    }

    if (target - v > 0) {
      cs([v, ...candidates], target - v, [...prev, v]);
    }

    cs([...candidates], target, [...prev]);
  }

  cs(candidates, target, []);
  return Array.from(result).map(r => r.split(',').map(Number));
}

// [[3,3,3,3,3],[3,3,3,6],[3,3,9],[3,3,5,4],[3,12],[3,6,6],[3,7,5],[3,8,4],[3,4,4,4],[9,6],[11,4],[6,5,4],[7,8],[7,4,4],[5,5,5]]...
console.log(combinationSum([3, 12, 9, 11, 6, 7, 8, 5, 4], 15));
