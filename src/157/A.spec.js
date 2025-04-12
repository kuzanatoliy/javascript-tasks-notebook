const { getCountOfWinCells } = require('./A');

describe('157A. Game Outcome', () => {
  it.each`
    n    | matrix                                                      | result
    ${1} | ${[[1]]}                                                    | ${0}
    ${2} | ${[[1, 2], [3, 4]]}                                         | ${2}
    ${3} | ${[[5, 7, 8, 4], [9, 5, 3, 2], [1, 6, 6, 4], [9, 5, 7, 3]]} | ${6}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getCountOfWinCells(matrix)).toBe(result);
  });
});
