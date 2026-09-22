const { getTeamsCount } = require('./A');

describe('166A. Rank List', () => {
  it.each`
    n    | k    | table                                                            | result
    ${1} | ${2} | ${[[4, 10], [4, 10], [4, 10], [3, 20], [2, 1], [2, 1], [1, 10]]} | ${3}
    ${2} | ${4} | ${[[3, 1], [3, 1], [5, 3], [3, 1], [3, 1]]}                      | ${4}
  `('Base test: $n', ({ k, table, result }) => {
    expect(getTeamsCount(k, table)).toBe(result);
  });
});
