const { getCountOfPossibleWays } = require('./A');

describe('104A. Blackjack', () => {
  it.each`
    n    | num   | result
    ${1} | ${12} | ${4}
    ${2} | ${20} | ${15}
    ${3} | ${10} | ${0}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfPossibleWays(num)).toBe(result);
  });
});
