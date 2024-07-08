function permutations(nums) {
  const result = [];
  function dfs(nums, pre) {
    if (nums.length === 0) {
      result.push(pre);
      return;
    }
    nums.forEach((num, index) => {
      dfs([...nums.slice(0, index), ...nums.slice(index + 1)], [...pre, num]);
    });
  }
  dfs(nums, []);
  return result;
}
