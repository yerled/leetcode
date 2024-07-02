function reverseInteger(x) {
  let reversed = x.toString().split('').reverse().join('');
  const result = parseInt(reversed) * Math.sign(x);
  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
  } else {
    return result;
  }
}
