const { getMinCountOfMatches } = require('./A');

describe('1223A. Cards', () => {
  it.each`
    n    | num   | result
    ${1} | ${2}  | ${2}
    ${2} | ${5}  | ${1}
    ${3} | ${8}  | ${0}
    ${4} | ${11} | ${1}
  `('Base test: $n', ({ num, result }) => {
    expect(getMinCountOfMatches(num)).toBe(result);
  });
});
