const { getOperationCount } = require('./A');

describe('359A. Table', () => {
  it.each`
    n    | matrix                                          | result
    ${1} | ${[[0, 0, 0], [0, 1, 0], [0, 0, 0]]}            | ${4}
    ${2} | ${[[0, 0, 0], [0, 0, 1], [1, 0, 0], [0, 0, 0]]} | ${2}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getOperationCount(matrix)).toBe(result);
  });
});
