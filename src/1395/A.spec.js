const { isItPossibleToBuildPalindrome } = require('./A');

describe('1395A. Juggling Letters', () => {
  it.each`
    n    | r             | g             | b             | w             | result
    ${1} | ${0}          | ${1}          | ${1}          | ${1}          | ${'NO'}
    ${2} | ${8}          | ${1}          | ${9}          | ${3}          | ${'YES'}
    ${3} | ${0}          | ${0}          | ${0}          | ${0}          | ${'YES'}
    ${4} | ${1000000000} | ${1000000000} | ${1000000000} | ${1000000000} | ${'YES'}
  `('Base test: $n', ({ r, g, b, w, result }) => {
    expect(isItPossibleToBuildPalindrome(r, g, b, w)).toBe(result);
  });
});
