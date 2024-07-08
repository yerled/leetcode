function permutations(nums) {
  const result = [];
  const seenDfs = {};
  function dfs(nums, pre) {
    const key = `${pre.join()}-${nums.join()}`;
    if (seenDfs[key]) return;
    seenDfs[key] = true;
    if (nums.length === 0) {
      result.push(pre);
      return;
    }
    const seen = new Set();
    nums.forEach((num, index) => {
      if (seen.has(num)) return;
      dfs([...nums.slice(0, index), ...nums.slice(index + 1)], [...pre, num]);
    });
  }
  dfs(nums, []);
  return result;
}
