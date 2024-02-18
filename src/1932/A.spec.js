const { getCountOfCoins } = require('./A');

describe('1932A. Thorns and Coins', () => {
  it.each`
    n    | string               | result
    ${1} | ${'.@@*@.**@@'}      | ${3}
    ${2} | ${'.@@@@'}           | ${4}
    ${3} | ${'.@@..@***..@@@*'} | ${3}
  `('Base test: $n', ({ string, result }) => {
    expect(getCountOfCoins(string)).toBe(result);
  });
});
