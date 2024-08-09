const { getTurnedMatrix } = require('./A');

describe('1994A. Diverse Game', () => {
  it.each`
    n    | matrix                               | result
    ${1} | ${[[1]]}                             | ${-1}
    ${2} | ${[[2], [1]]}                        | ${[[1], [2]]}
    ${3} | ${[[2, 4, 5, 3, 1]]}                 | ${[[1, 2, 4, 5, 3]]}
    ${4} | ${[[1, 2, 3, 4], [5, 6, 7, 8]]}      | ${[[8, 5, 6, 7], [4, 1, 2, 3]]}
    ${5} | ${[[4, 2, 1], [9, 8, 3], [6, 7, 5]]} | ${[[5, 6, 7], [1, 4, 2], [3, 9, 8]]}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getTurnedMatrix(matrix)).toStrictEqual(result);
  });
});
