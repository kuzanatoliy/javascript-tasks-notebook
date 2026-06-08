const { getMaxOperationCount } = require('./A');

describe('2232A. Convergence', () => {
  it.each`
    n    | arr                                  | result
    ${1} | ${[1, 2, 3, 4, 5]}                   | ${2}
    ${2} | ${[1, 1, 1, 2, 2]}                   | ${2}
    ${3} | ${[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]} | ${5}
    ${4} | ${[1, 2, 2, 2, 2]}                   | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxOperationCount(arr)).toBe(result);
  });
});
