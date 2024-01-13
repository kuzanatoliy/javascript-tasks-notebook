const { isItPossibleToSolve } = require('./A');

describe('1345A. Puzzle Pieces', () => {
  it.each`
    n    | sizes               | result
    ${1} | ${[1, 3]}           | ${'YES'}
    ${2} | ${[100000, 100000]} | ${'NO'}
    ${3} | ${[2, 2]}           | ${'YES'}
  `('Base test: $n', ({ sizes, result }) => {
    expect(isItPossibleToSolve(sizes)).toBe(result);
  });
});
