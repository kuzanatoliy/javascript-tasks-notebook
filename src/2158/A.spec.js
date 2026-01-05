const { getMaxCountOfSuspendedPlayers } = require('./A');

describe('2158A. Suspension', () => {
  it.each`
    n    | num   | y     | r    | result
    ${1} | ${3}  | ${1}  | ${2} | ${2}
    ${2} | ${2}  | ${0}  | ${0} | ${0}
    ${3} | ${4}  | ${6}  | ${0} | ${3}
    ${4} | ${3}  | ${3}  | ${3} | ${3}
    ${5} | ${10} | ${11} | ${5} | ${10}
  `('Base test: $n', ({ num, y, r, result }) => {
    expect(getMaxCountOfSuspendedPlayers(num, y, r)).toBe(result);
  });
});
