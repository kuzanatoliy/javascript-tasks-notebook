const { getAmount } = require('./B1');

describe('177B1. Rectangular Game', () => {
  it.each`
    n    | num   | result
    ${1} | ${10} | ${16}
    ${2} | ${8}  | ${15}
  `('Base test: $n', ({ num, result }) => {
    expect(getAmount(num)).toBe(result);
  });
});
