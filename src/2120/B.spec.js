const { getCountOfBalls } = require('./B');

describe('2120B. Square Pool', () => {
  it.each`
    n    | s    | balls                                                                          | result
    ${1} | ${2} | ${[[1, 1, 1, 1]]}                                                              | ${1}
    ${2} | ${4} | ${[[1, -1, 1, 1], [1, -1, 2, 2], [-1, 1, 2, 3], [1, -1, 1, 3], [-1, 1, 3, 1]]} | ${3}
  `('Base test: $n', ({ s, balls, result }) => {
    expect(getCountOfBalls(s, balls)).toBe(result);
  });
});
