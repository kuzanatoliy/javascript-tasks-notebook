const { getMap } = require('./A');

describe('275A. Lights Out', () => {
  it.each`
    n    | matrix                               | result
    ${1} | ${[[1, 0, 0], [0, 0, 0], [0, 0, 1]]} | ${[[0, 0, 1], [0, 1, 0], [1, 0, 0]]}
    ${2} | ${[[1, 0, 1], [8, 8, 8], [2, 0, 3]]} | ${[[0, 1, 0], [0, 1, 1], [1, 0, 0]]}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getMap(matrix)).toStrictEqual(result);
  });
});
