const { getMinCountOfCoins } = require('./A');

describe('2128A. Recycling Center', () => {
  it.each`
    n    | arr                                       | k          | result
    ${1} | ${[10, 4, 15, 1, 8]}                      | ${10}      | ${2}
    ${2} | ${[1000000000, 1000000000, 1000000000]}   | ${42}      | ${3}
    ${3} | ${[29, 25, 2, 12, 15, 42, 14, 6, 16, 9]}  | ${30}      | ${6}
    ${3} | ${[1, 1, 1, 1, 1, 1, 1, 1, 1, 864026633]} | ${1000000} | ${1}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getMinCountOfCoins(arr, k)).toBe(result);
  });
});
