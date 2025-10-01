const { getLovelyPalindrome } = require('./B');

describe('686B. Lovely Palindromes', () => {
  it.each`
    n    | num   | result
    ${1} | ${1}  | ${'11'}
    ${2} | ${10} | ${'1001'}
  `('Base test: $n', ({ num, result }) => {
    expect(getLovelyPalindrome(num)).toBe(result);
  });
});
