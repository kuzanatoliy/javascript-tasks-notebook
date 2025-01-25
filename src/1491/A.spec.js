const { getAnswers } = require('./A');

describe('1492A. K-th Largest Value', () => {
  it.each`
    n    | arr                | queries                                     | result
    ${1} | ${[1, 1, 0, 1, 0]} | ${[[2, 3], [1, 2], [2, 3], [2, 1], [2, 5]]} | ${[1, 0, 1, 0]}
  `('Base test: $n', ({ arr, queries, result }) => {
    expect(getAnswers(arr, queries)).toStrictEqual(result);
  });
});
