function permutationSequence(n, k) {
  let cur = 0;
  let result = [];
  let nums = new Array(n).fill(0).map((_, i) => i + 1);

  const maxArr = [1];

  let i = 1;
  while (i < n) {
    maxArr[i] = maxArr[i - 1] * i;
    i++;
  }

  console.log('maxArr', maxArr);

  let _n = n;
  let _k = k;
  function dfs(arr) {
    if (arr.length === n) {
      result = arr.join('');
      return;
    }

    let ii = Math.floor(_k / maxArr[_n - 1]);
    console.log('ii', ii);

    _k = _k - ii * maxArr[_n - 1];
    _n--;
    const num = nums.splice(_k > 0 ? ii : ii - 1, 1)[0];
    console.log('num, nums', num, nums);
    dfs([...arr, num]);
  }

  dfs([]);
  return result;
}

console.log(permutationSequence(3, 3));
// console.log(permutationSequence(9, 37098));
