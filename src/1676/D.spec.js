const { getMaxSum } = require('./D');

describe('1676D. X-Sum', () => {
  it.each`
    n    | matrix                                                      | result
    ${1} | ${[[1, 2, 2, 1], [2, 4, 2, 4], [2, 2, 3, 1], [2, 4, 2, 4]]} | ${20}
    ${2} | ${[[1], [0]]}                                               | ${1}
    ${3} | ${[[1, 1, 1], [1, 1, 1], [1, 1, 1]]}                        | ${5}
    ${4} | ${[[0, 1, 1], [1, 0, 1], [1, 1, 0]]}                        | ${3}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getMaxSum(matrix)).toBe(result);
  });
});
