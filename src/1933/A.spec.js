const { getMaxAbsSum } = require('./A');

describe('1933A. Turtle Puzzle: Rearrange and Negate', () => {
  it.each`
    n    | array                                      | result
    ${1} | ${[-2, 3, -3]}                             | ${8}
    ${2} | ${[0]}                                     | ${0}
    ${3} | ${[0, 1]}                                  | ${1}
    ${4} | ${[-99]}                                   | ${99}
    ${5} | ${[10, -2, -3, 7]}                         | ${22}
    ${6} | ${[-1, -2, -3, -4, -5]}                    | ${15}
    ${7} | ${[-41, 22, -69, 73, -15, -50]}            | ${270}
    ${8} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} | ${78}
  `('Base test: $n', ({ array, result }) => {
    expect(getMaxAbsSum(array)).toBe(result);
  });
});
