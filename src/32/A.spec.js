const { getCountOfPairs } = require('./A');

describe('32A. Reconnaissance', () => {
  it.each`
    n    | array                   | d     | result
    ${1} | ${[10, 20, 50, 60, 65]} | ${10} | ${6}
    ${2} | ${[55, 30, 29, 31, 55]} | ${1}  | ${6}
  `('Base test: $n', ({ array, d, result }) => {
    expect(getCountOfPairs(array, d)).toBe(result);
  });
});
