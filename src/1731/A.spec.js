const { getMaxMoney } = require('./A');

describe('1731A. Planets', () => {
  it.each`
    n    | array                       | result
    ${1} | ${[2n, 3n, 2n]}             | ${28308n}
    ${2} | ${[1n, 3n]}                 | ${8088n}
    ${3} | ${[1000000n, 1000000n, 1n]} | ${2022000000004044n}
  `('Base test: $n', ({ array, result }) => {
    expect(getMaxMoney(array)).toBe(result);
  });
});
