const { isItPossibleToReorder } = require('./A');

describe('2208A. Bingo Candies', () => {
  it.each`
    n    | matrix                               | result
    ${1} | ${[[1, 2, 3], [3, 1, 4], [4, 1, 2]]} | ${'YES'}
    ${2} | ${[[1, 1, 1], [2, 3, 4], [1, 4, 3]]} | ${'YES'}
    ${3} | ${[[1, 1, 1], [1, 1, 1], [1, 1, 2]]} | ${'NO'}
  `('Base test: $n', ({ matrix, result }) => {
    expect(isItPossibleToReorder(matrix)).toBe(result);
  });
});
