const { getCountOfRemovedElements } = require('./A');

describe('2157A. Dungeon Equilibrium', () => {
  it.each`
    n    | arr                               | result
    ${1} | ${[1, 2, 2]}                      | ${0}
    ${2} | ${[1, 1, 2, 2, 3]}                | ${2}
    ${3} | ${[1, 2, 3, 2, 4, 4, 4, 4, 5, 2]} | ${3}
    ${4} | ${[0]}                            | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfRemovedElements(arr)).toBe(result);
  });
});
