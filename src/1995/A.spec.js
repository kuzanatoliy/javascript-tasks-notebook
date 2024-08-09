const { getMinCountOfOccupiedDiagonals } = require('./A');

describe('1995A. Diagonals', () => {
  it.each`
    n    | a      | b      | result
    ${1} | ${1}   | ${0}   | ${0}
    ${2} | ${2}   | ${2}   | ${1}
    ${3} | ${2}   | ${3}   | ${2}
    ${4} | ${2}   | ${4}   | ${3}
    ${5} | ${10}  | ${50}  | ${6}
    ${6} | ${100} | ${239} | ${3}
    ${7} | ${3}   | ${9}   | ${5}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getMinCountOfOccupiedDiagonals(a, b)).toBe(result);
  });
});
