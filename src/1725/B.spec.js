const { getCountOfTeams } = require('./B');

describe('1725B. Basketball Together', () => {
  it.each`
    n    | arr                          | D      | result
    ${1} | ${[90, 80, 70, 60, 50, 100]} | ${180} | ${2}
  `('Base test: $n', ({ arr, D, result }) => {
    expect(getCountOfTeams(arr, D)).toBe(result);
  });
});
