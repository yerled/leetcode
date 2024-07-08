function myPow(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n < 0) return 1 / myPow(x, -n);

  return n % 2 === 0 ? myPow(x * x, n / 2) : x * myPow(x * x, (n - 1) / 2);
}

console.log('myPow(2.000, 10)', myPow(2.0, 10));
