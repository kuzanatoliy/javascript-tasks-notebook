const { getCountOfCoins } = require('./A');

describe('2042A. Greedy Monocarp', () => {
  it.each`
    n    | arr                | k     | result
    ${1} | ${[4, 1, 2, 3, 2]} | ${4}  | ${0}
    ${2} | ${[4, 1, 2, 3, 2]} | ${10} | ${1}
    ${3} | ${[1, 1]}          | ${10} | ${8}
    ${4} | ${[3, 3, 3]}       | ${8}  | ${2}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getCountOfCoins(arr, k)).toBe(result);
  });
});
