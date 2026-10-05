const { buildMatrix } = require('./B');

describe('2263A. Min Max Game', () => {
  it.each`
    n    | num  | k    | result
    ${1} | ${3} | ${0} | ${-1}
    ${2} | ${3} | ${5} | ${[[1, 2, 3], [4, 5, 6], [7, 8, 9]]}
    ${3} | ${5} | ${5} | ${[[1, 6, 7, 8, 9], [10, 2, 11, 12, 13], [14, 15, 3, 16, 17], [18, 19, 20, 4, 21], [22, 23, 24, 25, 5]]}
    ${4} | ${4} | ${3} | ${-1}
    ${5} | ${1} | ${1} | ${[[1]]}
  `('Base test: $n', ({ num, k, result }) => {
    expect(buildMatrix(num, k)).toStrictEqual(result);
  });
});
