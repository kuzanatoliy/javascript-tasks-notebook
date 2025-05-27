const { getAmount } = require('./A');

describe('588A. Duff and Meat', () => {
  it.each`
    n    | props                       | result
    ${1} | ${[[1, 3], [2, 2], [3, 1]]} | ${10}
    ${2} | ${[[1, 3], [2, 1], [3, 2]]} | ${8}
  `('Base test: $n', ({ props, result }) => {
    expect(getAmount(props)).toBe(result);
  });
});
