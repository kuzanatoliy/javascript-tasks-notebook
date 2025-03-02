const { isTriangularNumber } = require('./A');

describe('47A. Triangular numbers', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${'YES'}
    ${2} | ${2} | ${'NO'}
    ${3} | ${3} | ${'YES'}
  `('Base test: $n', ({ num, result }) => {
    expect(isTriangularNumber(num)).toBe(result);
  });
});
