function validParentheses(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const c = stack.pop();
      if (
        (c === '(' && s[i] !== ')') ||
        (c === '{' && s[i] !== '}') ||
        (c === '[' && s[i] !== ']')
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
