const {
  isPalindrome,
  isPolindromeTextV1,
  isPolindromeTextV2,
} = require('./is-palindrome');

describe('isPalindrome', () => {
  it.each`
    n    | str        | result
    ${1} | ${'abc'}   | ${false}
    ${2} | ${'abcba'} | ${true}
  `('Base test: $n', ({ str, result }) => {
    expect(isPalindrome(str)).toBe(result);
  });
});

describe('isPolindromeTextV1', () => {
  it.each`
    n    | str                                      | result
    ${1} | ${'A man, a plan, a canal: Panama blue'} | ${false}
    ${2} | ${'A man, a plan, a canal: Panama'}      | ${true}
  `('Base test: $n', ({ str, result }) => {
    expect(isPolindromeTextV1(str)).toBe(result);
  });
});

describe('isPolindromeTextV2', () => {
  it.each`
    n    | str                                      | result
    ${1} | ${'A man, a plan, a canal: Panama blue'} | ${false}
    ${2} | ${'A man, a plan, a canal: Panama'}      | ${true}
    ${3} | ${'.,:'}                                 | ${false}
    ${4} | ${'A'}                                   | ${true}
  `('Base test: $n', ({ str, result }) => {
    expect(isPolindromeTextV2(str)).toBe(result);
  });
});
