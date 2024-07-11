function largestRectangleInHistogram(heights) {
  let maxArea = 0;
  const stack = [];
  for (let i = 0; i < heights.length; i++) {
    console.log(
      'i, stack, heights[stack[stack.length - 1]]:',
      i,
      stack,
      heights[stack[stack.length - 1]],
    );
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const height = heights[stack.pop()];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }
  while (stack.length) {
    const height = heights[stack.pop()];
    const width =
      stack.length === 0
        ? heights.length
        : heights.length - stack[stack.length - 1] - 1;
    maxArea = Math.max(maxArea, height * width);
  }
  return maxArea;
}

function largestRectangleInHistogramBruteForce(heights) {
  for (let i = 0; i < heights.length; i++) {
    let minHeight = Infinity;
    for (let j = i; j < heights.length; j++) {
      minHeight = Math.min(minHeight, heights[j]);
      maxArea = Math.max(maxArea, minHeight * (j - i + 1));
    }
  }
  return maxArea;
}

const case1 = new Array(100000).fill(8180);
const case2 = [2, 1, 5, 6, 2, 3];

console.log(largestRectangleInHistogram(case1));
console.log(largestRectangleInHistogram(case2));
