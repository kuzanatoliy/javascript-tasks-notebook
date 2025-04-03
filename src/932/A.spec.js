const { getPalindrome } = require('./A');

describe('932A. Palindromic Supersequence', () => {
  it.each`
    n    | str      | result
    ${1} | ${'aba'} | ${'abaaba'}
    ${2} | ${'ab'}  | ${'abba'}
  `('Base test: $n', ({ str, result }) => {
    expect(getPalindrome(str)).toBe(result);
  });
});
