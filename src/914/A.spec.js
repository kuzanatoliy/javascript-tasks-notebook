const { getLargestNotPerfectSquare } = require('./A');

describe('914A. Perfect Squares', () => {
  it.each`
    n    | arr                              | result
    ${1} | ${[4, 2]}                        | ${2}
    ${2} | ${[1, 2, 4, 8, 16, 32, 64, 576]} | ${32}
  `('Base test: $n', ({ arr, result }) => {
    expect(getLargestNotPerfectSquare(arr)).toBe(result);
  });
});
