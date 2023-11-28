const { checkTasksCount } = require('./A');

describe('231A. Team', () => {
  it.each`
    n    | matrix                               | result
    ${1} | ${[[1, 1, 0], [1, 1, 1], [1, 0, 0]]} | ${2}
    ${2} | ${[[1, 0, 0], [0, 1, 1]]}            | ${1}
  `('Base test: $n', ({ matrix, result }) => {
    expect(checkTasksCount(matrix)).toBe(result);
  });

  it.each`
    n    | matrix                                          | result
    ${1} | ${[[0, 0, 0], [0, 1, 0], [1, 0, 0], [0, 0, 1]]} | ${0}
  `('Special test: $n', ({ matrix, result }) => {
    expect(checkTasksCount(matrix)).toBe(result);
  });
});
