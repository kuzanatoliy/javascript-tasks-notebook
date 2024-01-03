const { getMaxPossibleSum } = require('./B');

describe('1353B. Two Arrays And Swaps', () => {
  it.each`
    n    | countOfMoves | arrayA             | arrayB                | result
    ${1} | ${1}         | ${[1, 2]}          | ${[3, 4]}             | ${6}
    ${2} | ${5}         | ${[5, 5, 6, 6, 5]} | ${[1, 2, 5, 4, 3]}    | ${27}
    ${3} | ${3}         | ${[1, 2, 3, 4, 5]} | ${[10, 9, 10, 10, 9]} | ${39}
    ${4} | ${0}         | ${[2, 2, 4, 3]}    | ${[2, 4, 2, 3]}       | ${11}
    ${5} | ${4}         | ${[1, 2, 2, 1]}    | ${[4, 4, 5, 4]}       | ${17}
  `('Base test: $n', ({ countOfMoves, arrayA, arrayB, result }) => {
    expect(getMaxPossibleSum(countOfMoves, arrayA, arrayB)).toBe(result);
  });
});
