const { getAria } = require('./A');

describe('1694A. Subrectangle Guess', () => {
  it.each`
    n    | matrix                                                             | result
    ${1} | ${[[3]]}                                                           | ${1}
    ${2} | ${[[2, 12, 6, 10], [3, 15, 16, 4], [1, 13, 8, 11], [14, 7, 9, 5]]} | ${9}
    ${3} | ${[[-7, 5, 2], [0, 8, 3]]}                                         | ${4}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getAria(matrix)).toBe(result);
  });
});
