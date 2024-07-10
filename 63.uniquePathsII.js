function uniquePaths(obstacleGrid) {
  const seen = {};
  function bt(obstacleGrid) {
    // console.log('obstacleGrid', obstacleGrid);
    if (obstacleGrid[0][0] === 1) return 0;
    let m = obstacleGrid.length;
    if (m === 1) return obstacleGrid[0].some(e => e === 1) ? 0 : 1;
    let n = obstacleGrid[0].length;
    if (n === 1) return obstacleGrid.some(arr => arr[0] === 1) ? 0 : 1;

    let key = JSON.stringify(obstacleGrid);
    if (seen[key] !== undefined) return seen[key];
    seen[key] = 0;
    if (obstacleGrid[0][1] === 0) {
      seen[key] += bt(obstacleGrid.map(arr => arr.slice(1)));
    }
    if (obstacleGrid[1][0] === 0) {
      seen[key] += bt(obstacleGrid.slice(1));
    }

    return seen[key];
  }

  const result = bt(obstacleGrid);
  // console.log('seen', seen);
  return result;
}

console.log(
  uniquePaths([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]),
);
console.log(
  uniquePaths([
    [0, 1],
    [0, 0],
  ]),
);
console.log(
  uniquePaths([
    [1, 0],
    [0, 0],
  ]),
);
