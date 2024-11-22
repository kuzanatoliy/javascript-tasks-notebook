const { getMinScore } = require('./A');

describe('2037A. Twice', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1]}                | ${0}
    ${2} | ${[2, 2]}             | ${1}
    ${3} | ${[1, 2]}             | ${0}
    ${4} | ${[1, 2, 3, 1]}       | ${1}
    ${5} | ${[1, 2, 3, 1, 2, 3]} | ${3}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinScore(arr)).toBe(result);
  });
});
