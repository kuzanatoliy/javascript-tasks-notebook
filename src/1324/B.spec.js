const { hasSubsequence } = require('./B');

describe('1324B. Yet Another Palindrome Problem', () => {
  it.each`
    n    | array                             | result
    ${1} | ${[1, 2, 1]}                      | ${'YES'}
    ${2} | ${[1, 2, 2, 3, 2]}                | ${'YES'}
    ${3} | ${[1, 1, 2]}                      | ${'NO'}
    ${4} | ${[1, 2, 2, 1]}                   | ${'YES'}
    ${5} | ${[1, 1, 2, 2, 3, 3, 4, 4, 5, 5]} | ${'NO'}
  `('Base test: $n', ({ array, result }) => {
    expect(hasSubsequence(array)).toBe(result);
  });
});
