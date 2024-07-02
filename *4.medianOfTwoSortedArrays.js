function medianOfTwoSortedArrays(nums1, nums2) {
  let n = nums1.length;
  let m = nums2.length;

  if (n > m) {
    return medianOfTwoSortedArrays(nums2, nums1);
  }

  let low = 0;
  let high = n;

  while (low <= high) {
    let partitionX = Math.floor((low + high) / 2);
    let partitionY = Math.floor((n + m + 1) / 2) - partitionX;

    let maxX =
      partitionX === 0 ? Number.MIN_SAFE_INTEGER : nums1[partitionX - 1];
    let maxY =
      partitionY === 0 ? Number.MIN_SAFE_INTEGER : nums2[partitionY - 1];

    let minX = partitionX === n ? Number.MAX_SAFE_INTEGER : nums1[partitionX];
    let minY = partitionY === m ? Number.MAX_SAFE_INTEGER : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      if ((n + m) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
  throw new Error('Input arrays are not sorted');
}
