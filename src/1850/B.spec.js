const { getWinner } = require('./B');

describe('1850B. Ten Words of Wisdom', () => {
  it.each`
    n    | candidates                                    | result
    ${1} | ${[[7, 2], [12, 5], [9, 3], [9, 4], [10, 1]]} | ${4}
    ${2} | ${[[1, 2], [3, 4], [5, 6]]}                   | ${3}
    ${3} | ${[[1, 43]]}                                  | ${1}
  `('Base test: $n', ({ candidates, result }) => {
    expect(getWinner(candidates)).toBe(result);
  });
});
