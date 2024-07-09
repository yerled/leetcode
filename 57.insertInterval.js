function insertIntervals(intervals, newInterval) {
  function mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];

    while (intervals.length) {
      const interval = intervals.shift();

      if (!result.length) {
        result.push(interval);
        continue;
      }

      const last = result[result.length - 1];
      if (last[1] >= interval[0]) {
        last[1] = Math.max(last[1], interval[1]);
      } else {
        result.push(interval);
      }
    }

    return result;
  }

  return mergeIntervals([...intervals, newInterval]);
}
