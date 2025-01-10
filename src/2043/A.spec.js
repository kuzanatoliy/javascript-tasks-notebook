const { getCountOfCoins } = require('./A');

describe('2043A. Game of Division', () => {
  it.each`
    n    | num                     | result
    ${1} | ${1n}                   | ${1n}
    ${2} | ${5n}                   | ${2n}
    ${3} | ${16n}                  | ${4n}
    ${4} | ${1000000000000000000n} | ${536870912n}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getCountOfCoins(num, k)).toStrictEqual(result);
  });
});
