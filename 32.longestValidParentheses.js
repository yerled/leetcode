function longestValidParentheses(s) {
  const seen = new Set();
  let max = 0;

  function updateMax(v) {
    if (v > max) max = v;
  }

  function splitByIndexArr(s, arr, cb) {
    let startIndex = 0;
    while (arr.length > 0) {
      const index = arr.shift();
      if (index > startIndex) {
        cb(s.slice(startIndex, index));
      }
      startIndex = index + 1;
    }
    const remain = s.slice(startIndex);
    if (remain) {
      cb(remain);
    }
  }

  function calcMax(s) {
    if (s.length < 2 || s.length < max) return;
    if (seen.has(s)) return;
    seen.add(s);

    const stack = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === ')') {
        if (stack.length > 0) {
          stack.pop();
        } else {
          if (i === 0) {
            calcMax(s.slice(1));
            return;
          }
          updateMax(s.slice(0, i).length);
          calcMax(s.slice(i + 1));
          return;
        }
      } else {
        stack.push(i);
      }
    }

    if (stack.length === 0) {
      updateMax(s.length);
      return;
    }

    splitByIndexArr(s, stack, ss => updateMax(ss.length));

    return;
  }

  calcMax(s);
  return max;
}

console.log(longestValidParentheses(')(((((()())()()))()(()))(')); // 22
