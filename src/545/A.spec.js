const { getWinners } = require('./A');

describe('545A. Toy Cars', () => {
  it.each`
    n    | matrix                                                          | result
    ${1} | ${[[-1, 0, 0], [0, -1, 1], [0, 2, -1]]}                         | ${[1, 3]}
    ${2} | ${[[-1, 3, 3, 3], [3, -1, 3, 3], [3, 3, -1, 3], [3, 3, 3, -1]]} | ${[]}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getWinners(matrix)).toStrictEqual(result);
  });
});
