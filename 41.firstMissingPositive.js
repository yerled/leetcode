function firstMissingPositive(nums) {
  let i = 0;
  while (i < nums.length) {
    if (
      nums[i] > 0 &&
      nums[i] <= nums.length &&
      nums[nums[i] - 1] !== nums[i]
    ) {
      let temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    } else {
      i++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }
  return nums.length + 1;
}
