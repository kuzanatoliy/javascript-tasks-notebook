const { buildString } = require('./A');

describe('2005A. Simple Palindrome', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${'ae'}
    ${2} | ${3} | ${'aei'}
    ${3} | ${6} | ${'aaeiou'}
  `('Base test: $n', ({ num, result }) => {
    expect(buildString(num)).toBe(result);
  });
});
