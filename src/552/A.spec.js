const { getValue } = require('./A');

describe('552A. Vanya and Table', () => {
  it.each`
    n    | array                           | result
    ${1} | ${[[1, 1, 2, 3], [2, 2, 3, 3]]} | ${10}
    ${2} | ${[[1, 1, 3, 3], [1, 1, 3, 3]]} | ${18}
  `('Base test: $n', ({ array, result }) => {
    expect(getValue(array)).toBe(result);
  });
});
