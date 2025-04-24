const { getCountOfTeams } = require('./A');

describe('115A. Party', () => {
  it.each`
    n    | arr                  | result
    ${1} | ${[-1, 1, 2, 1, -1]} | ${3}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfTeams(arr)).toBe(result);
  });
});
