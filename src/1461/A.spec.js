const { getString } = require('./A');

describe('1455A. String Generation', () => {
  it.each`
    n    | num  | k    | result
    ${1} | ${3} | ${2} | ${'abc'}
    ${2} | ${4} | ${1} | ${'abca'}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getString(num, k)).toBe(result);
  });
});
