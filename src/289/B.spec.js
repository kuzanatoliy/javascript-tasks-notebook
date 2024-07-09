const { getCountOfMoves } = require('./B');

describe('289B. Polo the Penguin and Matrix', () => {
  it.each`
    n    | matrix              | k    | result
    ${1} | ${[[2, 4], [6, 8]]} | ${2} | ${4}
    ${2} | ${[[6, 7]]}         | ${7} | ${-1}
  `('Base test: $n', ({ matrix, k, result }) => {
    expect(getCountOfMoves(matrix, k)).toBe(result);
  });
});
