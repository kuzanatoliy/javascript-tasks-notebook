const { isItPossibleToMove } = require('./A');

describe('1749A. Cowardly Rooks', () => {
  it.each`
    n    | num  | positions           | result
    ${1} | ${2} | ${[[1, 2], [2, 1]]} | ${'NO'}
    ${2} | ${3} | ${[[2, 2]]}         | ${'YES'}
  `('Base test: $n', ({ num, positions, result }) => {
    expect(isItPossibleToMove(num, positions)).toBe(result);
  });
});
