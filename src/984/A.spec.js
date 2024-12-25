const { getWinNumber } = require('./A');

describe('984A. Game', () => {
  it.each`
    n    | arr                                        | result
    ${1} | ${[2, 1, 3]}                               | ${2}
    ${2} | ${[2, 2, 2]}                               | ${2}
    ${3} | ${[38, 82, 23, 37, 96, 4, 81, 60, 67, 86]} | ${60}
  `('Base test: $n', ({ arr, result }) => {
    expect(getWinNumber(arr)).toBe(result);
  });
});
