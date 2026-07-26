const { isPalindrome } = require('./is-palindrome');

describe('isPalindrome', () => {
  it.each`
    n    | str        | result
    ${1} | ${'abc'}   | ${false}
    ${2} | ${'abcba'} | ${true}
  `('Base test: $n', ({ str, result }) => {
    expect(isPalindrome(str)).toBe(result);
  });
});
