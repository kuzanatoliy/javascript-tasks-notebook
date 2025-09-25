const { getHexagonalNumber } = require('./A');

describe('136A. Hexagonal numbers', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${6}
    ${2} | ${5} | ${45}
  `('Base test: $n', ({ num, result }) => {
    expect(getHexagonalNumber(num)).toBe(result);
  });
});
