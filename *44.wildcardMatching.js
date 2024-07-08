function isMatch(s, p) {
  // console.log('isMatch: ', s, p);
  if (p === '') return s === '';
  if (s === '') {
    for (let i = 0; i < p.length; i++) {
      if (p[i] !== '*') return false;
    }
  }

  if (p[0] !== '*') {
    return (p[0] === s[0] || p[0] === '?') && isMatch(s.slice(1), p.slice(1));
  }

  let isPure = true;
  for (let i = 0; i < p.length; i++) {
    if (p[i] !== '*') {
      isPure = false;
      for (let j = 0; j < s.length; j++) {
        if (p[i] === s[j] || p[i] === '?') {
          if (isMatch(s.slice(j + 1), p.slice(i + 1))) {
            return true;
          }
        }
      }
      return false;
    }
  }

  return isPure;
}

console.log(isMatch('aa', 'a')); // false
console.log(isMatch('aa', '*')); // true
console.log(isMatch('cb', '?a')); // false
console.log(isMatch('adceb', '*a*b')); // true
console.log(isMatch('acdcb', 'a*c?b')); // false
console.log(isMatch('', '******')); // true
console.log(isMatch('aa', '******')); // true
console.log(isMatch('abcabczzzde', '*abc???de*')); // true
console.log(
  isMatch(
    'abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb',
    '**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb',
  ),
);
