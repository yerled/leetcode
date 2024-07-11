function subsets(nums) {
  const result = [];
  function dfs(index, arr) {
    result.push(arr);
    for (let i = index; i < nums.length; i++) {
      dfs(i + 1, [...arr, nums[i]]);
    }
  }
  dfs(0, []);
  return result;
}
