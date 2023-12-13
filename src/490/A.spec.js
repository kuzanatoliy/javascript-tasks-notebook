const { getTeams } = require('./A');

describe('490A. Team Olympiad', () => {
  it.each`
    n    | members                  | result
    ${1} | ${[1, 3, 1, 3, 2, 1, 2]} | ${[2, [[1, 5, 2], [3, 7, 4]]]}
    ${2} | ${[2, 1, 1, 2]}          | ${[0, []]}
  `('Base test: $n', ({ members, result }) => {
    expect(getTeams(members)).toStrictEqual(result);
  });
});
