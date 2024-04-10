const { getWinner } = require('./A');

describe('1365A. C+=', () => {
  it.each`
    n    | matrix                               | result
    ${1} | ${[[0, 0], [0, 0]]}                  | ${'Vivek'}
    ${2} | ${[[0, 0], [0, 1]]}                  | ${'Ashish'}
    ${3} | ${[[1, 0, 1], [1, 1, 0]]}            | ${'Vivek'}
    ${4} | ${[[1, 0, 0], [0, 0, 0], [1, 0, 0]]} | ${'Vivek'}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getWinner(matrix)).toBe(result);
  });
});
