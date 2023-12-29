const { getCountOfCoins } = require('./A');

describe('1551A. Polycarp and Coins', () => {
  it.each`
    n    | coins         | result
    ${1} | ${1000}       | ${[334, 333]}
    ${2} | ${30}         | ${[10, 10]}
    ${3} | ${1}          | ${[1, 0]}
    ${3} | ${32}         | ${[10, 11]}
    ${3} | ${1000000000} | ${[333333334, 333333333]}
    ${3} | ${5}          | ${[1, 2]}
  `('Base test: $n', ({ coins, result }) => {
    expect(getCountOfCoins(coins)).toStrictEqual(result);
  });
});
