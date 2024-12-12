const { getCountOfInterestingPairs } = require('./A');

describe('1771A. Hossam and Combinatorics', () => {
  it.each`
    n    | arr                    | result
    ${1} | ${[6, 2, 3, 8, 1]}     | ${2}
    ${2} | ${[7, 2, 8, 3, 2, 10]} | ${4}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfInterestingPairs(arr)).toBe(result);
  });
});
