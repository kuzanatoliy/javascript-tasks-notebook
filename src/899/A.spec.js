const { getCountOfTeams } = require('./A');

describe('899A. Splitting in Teams', () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[1, 1, 2, 1]}          | ${1}
    ${2} | ${[2, 2]}                | ${0}
    ${3} | ${[2, 2, 2, 1, 1, 1, 1]} | ${3}
    ${4} | ${[1, 1, 1]}             | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfTeams(arr)).toBe(result);
  });
});
