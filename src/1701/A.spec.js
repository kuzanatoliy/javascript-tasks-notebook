const { getCountOfMoves } = require('./A');

describe('1701A. Grass Field', () => {
  it.each`
    n    | matrix              | result
    ${1} | ${[[0, 0], [0, 0]]} | ${0}
    ${2} | ${[[1, 0], [0, 1]]} | ${1}
    ${3} | ${[[1, 1], [1, 1]]} | ${2}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getCountOfMoves(matrix)).toBe(result);
  });
});
