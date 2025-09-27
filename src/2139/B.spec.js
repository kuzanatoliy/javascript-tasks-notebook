const { getCountOfCakes } = require('./B');

describe('2139A. Maple and Multiplication', () => {
  it.each`
    n    | arr          | k       | result
    ${1} | ${[1, 2, 3]} | ${4}    | ${20}
    ${2} | ${[1, 2, 3]} | ${2}    | ${8}
    ${3} | ${[100000]}  | ${1000} | ${100000000}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getCountOfCakes(arr, k)).toBe(result);
  });
});
