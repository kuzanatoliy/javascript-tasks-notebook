const { getCountOfTeams } = require('./B');

describe('2091B. Team Training', () => {
  it.each`
    n    | arr                   | k     | result
    ${1} | ${[4, 5, 3, 3, 2, 6]} | ${4}  | ${4}
    ${2} | ${[4, 2, 1, 3]}       | ${10} | ${0}
    ${3} | ${[5, 3, 2, 3, 2]}    | ${3}  | ${4}
    ${4} | ${[9, 1, 7]}          | ${6}  | ${2}
    ${5} | ${[6, 1, 3, 6, 3, 2]} | ${10} | ${1}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getCountOfTeams(arr, k)).toBe(result);
  });
});
