const { getMaxPossibleValue } = require('./A');

describe('1763A. Absolute Maximization', () => {
  it.each`
    n    | arr                              | result
    ${1} | ${[1, 0, 1]}                     | ${1}
    ${2} | ${[5, 5, 5, 5]}                  | ${0}
    ${3} | ${[1, 2, 3, 4, 5]}               | ${7}
    ${4} | ${[20, 85, 100, 41, 76, 49, 36]} | ${125}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxPossibleValue(arr)).toBe(result);
  });
});
