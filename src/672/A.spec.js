const { getNthDigit } = require('./A');

describe('672A. Summer Camp', () => {
  it.each`
    n    | num   | result
    ${1} | ${3}  | ${'3'}
    ${2} | ${11} | ${'0'}
  `('Base test: $n', ({ num, result }) => {
    expect(getNthDigit(num)).toBe(result);
  });
});
