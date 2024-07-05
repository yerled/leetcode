function multiplyStrings(num1, num2) {
  let result = new Array(num1.length + num2.length).fill(0);
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      let mul = num1[i] * num2[j];
      let sum = mul + result[i + j + 1];
      result[i + j] += Math.floor(sum / 10);
      result[i + j + 1] = sum % 10;
    }
  }
  while (result[0] === 0) {
    result.shift();
  }
  return result.length ? result.join('') : '0';
}
