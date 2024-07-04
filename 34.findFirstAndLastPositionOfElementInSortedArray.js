function findFirstAndLastPositionOfElementInSortedArray(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  if (!nums.length || nums[left] > target || nums[right] < target)
    return [-1, -1];

  while (left <= right) {
    if (nums[left] === target && nums[right] === target) return [left, right];

    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) {
      left = mid;
      while (nums[left - 1] == target) left--;
      right = mid;
      while (nums[right + 1] == target) right++;
      return [left, right];
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [-1, -1];
}
