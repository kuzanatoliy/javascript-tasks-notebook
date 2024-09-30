const { isNotPerfectSquare } = require('./A');

describe('1514A. Sum of 2050', () => {
  it.each`
    n    | array           | result
    ${1} | ${[1, 5, 4]}    | ${'YES'}
    ${2} | ${[100, 10000]} | ${'NO'}
  `('Base test: $n', ({ array, result }) => {
    expect(isNotPerfectSquare(array)).toBe(result);
  });
});
