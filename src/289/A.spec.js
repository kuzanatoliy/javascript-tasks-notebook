const { getCountOfMoves } = require('./A');

describe('289A. Polo the Penguin and Segments', () => {
  it.each`
    n    | lines                       | k    | result
    ${1} | ${[[1, 2], [3, 4]]}         | ${3} | ${2}
    ${2} | ${[[1, 2], [3, 3], [4, 7]]} | ${7} | ${0}
  `('Base test: $n', ({ lines, k, result }) => {
    expect(getCountOfMoves(lines, k)).toBe(result);
  });
});
