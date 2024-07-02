function palindromeNumber(x) {
  if (x < 0) {
    return false;
  }

  let original = x;
  let reversed = 0;

  while (x > 0) {
    let remainder = x % 10;
    x = Math.floor(x / 10);
    reversed = reversed * 10 + remainder;
  }

  return reversed === original;
}
