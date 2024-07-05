function trappingRainWater(heights) {
  let result = 0;

  let left = 0;
  let right = heights.length - 1;

  let base = 0;

  while (left < right) {
    if (heights[left] <= base) {
      result += base - heights[left];
      left++;
      continue;
    }
    if (heights[right] <= base) {
      result += base - heights[right];
      right--;

      continue;
    }

    base = Math.min(heights[left], heights[right]);
  }

  return result;
}

console.log(trappingRainWater([4, 2, 0, 3, 2, 5]) === 9);
