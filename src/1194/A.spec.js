const { getSaveNumber } = require('./A');

describe('1194A. Remove a Progression', () => {
  it.each`
    n    | num   | x    | result
    ${1} | ${3}  | ${1} | ${2}
    ${2} | ${4}  | ${2} | ${4}
    ${3} | ${69} | ${6} | ${12}
  `('Base test: $n', ({ num, x, result }) => {
    expect(getSaveNumber(num, x)).toBe(result);
  });
});
