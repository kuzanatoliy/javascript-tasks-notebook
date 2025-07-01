const { getMinDifficulty } = require('./A');

describe('496A. Minimum Difficulty', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 4, 6]}       | ${5}
    ${2} | ${[1, 2, 3, 4, 5]} | ${2}
    ${3} | ${[1, 2, 3, 7, 8]} | ${4}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinDifficulty(arr)).toBe(result);
  });
});
