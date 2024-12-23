const { getK } = require('./D');

describe('1907D. Jumping Through Segments', () => {
  it.each`
    n    | ranges                                       | result
    ${1} | ${[[1, 5], [3, 4], [5, 6], [8, 10], [0, 1]]} | ${7}
    ${2} | ${[[0, 2], [0, 1], [0, 3]]}                  | ${0}
    ${3} | ${[[3, 8], [10, 18], [6, 11]]}               | ${5}
    ${4} | ${[[10, 20], [0, 5], [15, 17], [2, 2]]}      | ${13}
  `('Base test: $n', ({ ranges, result }) => {
    expect(getK(ranges)).toBe(result);
  });
});
