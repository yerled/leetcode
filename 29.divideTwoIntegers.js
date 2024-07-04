function divideTwoIntegers(dividend, divisor) {
  if (dividend === 0) return 0;
  if (divisor === 1) return dividend;
  if (divisor === -1)
    return dividend === -Math.pow(2, 31) ? Math.pow(2, 31) - 1 : -dividend;

  let sign =
    (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? 1 : -1;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let res = 0;
  while (dividend >= divisor) {
    let count = 1;
    let sum = divisor;
    while (sum + sum <= dividend) {
      sum += sum;
      count += count;
    }
    dividend -= sum;
    res += count;
  }

  return sign === 1 ? Math.min(res, Math.pow(2, 31) - 1) : -res;
}
