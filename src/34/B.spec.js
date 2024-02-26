const { getMaxSum } = require('./B');

describe('34B. Sale', () => {
  it.each`
    n    | array                 | number | result
    ${1} | ${[-6, 0, 35, -2, 4]} | ${3}   | ${8}
    ${2} | ${[7, 0, 0, -7]}      | ${2}   | ${7}
  `('Base test: $n', ({ array, number, result }) => {
    expect(getMaxSum(array, number)).toBe(result);
  });
});
