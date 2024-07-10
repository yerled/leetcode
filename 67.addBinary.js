function addBinary(a, b) {
  let result = '';
  let carry = 0;

  while (true) {
    let charA = a[a.length - 1];
    let charB = b[b.length - 1];

    if (carry === 0 && charA === undefined && charB === undefined) {
      return result;
    }
    let sum = carry + Number(charA ?? 0) + Number(charB ?? 0);

    if (sum >= 2) {
      carry = 1;
      sum -= 2;
    } else {
      carry = 0;
    }

    result = sum + result;

    a = a.slice(0, -1);
    b = b.slice(0, -1);
  }
}

console.log(addBinary('11', '1'));
