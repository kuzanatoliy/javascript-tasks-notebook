const { getCountOfGames } = require('./A');

describe('1009A. Adjacent Replacements', () => {
  it.each`
    n    | costs                     | coins                       | result
    ${1} | ${[2, 4, 5, 2, 4]}        | ${[5, 3, 4, 6]}             | ${3}
    ${2} | ${[20, 40, 50, 20, 40]}   | ${[19, 20]}                 | ${0}
    ${3} | ${[4, 8, 15, 16, 23, 42]} | ${[1000, 1000, 1000, 1000]} | ${4}
  `('Base test: $n', ({ costs, coins, result }) => {
    expect(getCountOfGames(costs, coins)).toBe(result);
  });
});
