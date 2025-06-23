const { getMaxScore } = require('./B');

describe('2042B. Game with Colored Marbles', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 3, 1, 3, 4]} | ${4}
    ${2} | ${[1, 2, 3]}       | ${4}
    ${3} | ${[4, 4, 4, 4]}    | ${1}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getMaxScore(arr, k)).toBe(result);
  });
});
