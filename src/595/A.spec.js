const { getCountOfFlats } = require('./A');

describe('595A. Vitaly and Night', () => {
  it.each`
    n    | matrix                          | result
    ${1} | ${[[0, 0, 0, 1], [1, 0, 1, 1]]} | ${3}
    ${2} | ${[[1, 1, 0, 1, 0, 0]]}         | ${2}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getCountOfFlats(matrix)).toBe(result);
  });
});
