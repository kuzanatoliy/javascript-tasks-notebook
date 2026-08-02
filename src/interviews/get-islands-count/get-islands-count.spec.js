const { getIslandsCount } = require('./get-islands-count');

describe('getIslandsCount', () => {
  it.each`
    n    | matrix                                                                                   | result
    ${1} | ${[[0, 0, 0], [0, 0, 0], [0, 0, 0]]}                                                     | ${0}
    ${2} | ${[[1, 0, 1], [0, 0, 0], [1, 0, 1]]}                                                     | ${4}
    ${2} | ${[[1, 1, 0, 0, 0], [1, 0, 0, 0, 0], [1, 0, 1, 0, 1], [0, 0, 0, 0, 1], [0, 0, 0, 1, 1]]} | ${3}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getIslandsCount(matrix)).toBe(result);
  });
});
