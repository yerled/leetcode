function sortColors(nums) {
  let i = 0;
  let j = 0;
  let k = nums.length - 1;
  while (j <= k) {
    if (nums[j] === 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j++;
    } else if (nums[j] === 1) {
      j++;
    } else {
      [nums[j], nums[k]] = [nums[k], nums[j]];
      k--;
    }
  }
  return nums;
}
