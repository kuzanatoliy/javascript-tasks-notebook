const { getCountOfCoins } = require('./A');

describe('1061A. Coins', () => {
  it.each`
    n    | num  | sum   | result
    ${1} | ${5} | ${11} | ${3}
    ${2} | ${6} | ${16} | ${3}
  `('Base test: $n', ({ num, sum, result }) => {
    expect(getCountOfCoins(num, sum)).toBe(result);
  });
});
