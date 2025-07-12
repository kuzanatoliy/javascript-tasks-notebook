const { getBitstring } = require('./A');

describe('2118A. Equal Subsequences', () => {
  it.each`
    n    | num  | k    | result
    ${1} | ${4} | ${2} | ${'1100'}
    ${2} | ${5} | ${3} | ${'11100'}
    ${3} | ${5} | ${5} | ${'11111'}
    ${4} | ${6} | ${2} | ${'110000'}
    ${5} | ${1} | ${1} | ${'1'}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getBitstring(num, k)).toBe(result);
  });
});
