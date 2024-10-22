const { isGoodSubarray } = require('./C');

describe('1923C. Find B', () => {
  it.each`
    n    | array              | queries                             | result
    ${1} | ${[1, 2, 1, 4, 5]} | ${[[1, 5], [4, 4], [3, 4], [1, 3]]} | ${['YES', 'NO', 'YES', 'NO']}
  `('Base test: $n', ({ array, queries, result }) => {
    expect(isGoodSubarray(array, queries)).toStrictEqual(result);
  });
});
