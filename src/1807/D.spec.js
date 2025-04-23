const { couldSumBeOdd } = require('./D');

describe('1807D. Odd Queries', () => {
  it.each`
    n    | arr                               | queries                                                          | result
    ${1} | ${[2, 2, 1, 3, 2]}                | ${[[2, 3, 3], [2, 3, 4], [1, 5, 5], [1, 4, 9], [2, 4, 3]]}       | ${['YES', 'YES', 'YES', 'NO', 'YES']}
    ${2} | ${[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]} | ${[[3, 8, 13], [2, 5, 10], [3, 8, 10], [1, 10, 2], [1, 9, 100]]} | ${['NO', 'NO', 'NO', 'NO', 'YES']}
  `('Base test: $n', ({ arr, queries, result }) => {
    expect(couldSumBeOdd(arr, queries)).toStrictEqual(result);
  });
});
