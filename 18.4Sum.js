function fourSum(nums, target) {
  nums.sort((a, b) => a - b);

  const result = [];
  const seen = new Set();

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1,
        right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          const quadruplet = [nums[i], nums[j], nums[left], nums[right]];
          const str = quadruplet.join(',');
          if (!seen.has(str)) {
            seen.add(str);
            result.push(quadruplet);
          }
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
}
