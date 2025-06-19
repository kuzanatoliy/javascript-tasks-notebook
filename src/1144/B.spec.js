const { getMinSum } = require('./B');

describe('1144B. Parity Alternated Deletions', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1, 5, 7, 8, 2]}    | ${0}
    ${2} | ${[5, 1, 2, 4, 6, 3]} | ${0}
    ${3} | ${[1000000, 1000000]} | ${1000000}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinSum(arr)).toBe(result);
  });
});
