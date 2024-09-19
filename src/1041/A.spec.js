const { getCountOfStolenNumbers } = require('./A');

describe('1041A. Heist', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[10, 13, 12, 8]} | ${2}
    ${2} | ${[7, 5, 6, 4, 8]} | ${0}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfStolenNumbers(arr)).toBe(result);
  });
});
