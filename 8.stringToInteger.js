function myAtoi(s) {
  let i = 0;
  let sign = 1;
  let result = 0;
  let INT_MAX = Math.pow(2, 31) - 1;
  let INT_MIN = -Math.pow(2, 31);
  while (s[i] === ' ') {
    i++;
  }
  if (s[i] === '+' || s[i] === '-') {
    sign = s[i] === '+' ? 1 : -1;
    i++;
  }
  while (i < s.length) {
    if (s[i] >= '0' && s[i] <= '9') {
      result = result * 10 + parseInt(s[i]);
      i++;
    } else {
      break;
    }
  }
  result = result * sign;
  if (result > INT_MAX) {
    return INT_MAX;
  } else if (result < INT_MIN) {
    return INT_MIN;
  } else {
    return result;
  }
}
