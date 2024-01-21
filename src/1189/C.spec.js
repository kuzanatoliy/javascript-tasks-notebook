const { getQueriesResults } = require('./C');

describe('1189C. Candies!', () => {
  it.each`
    n    | sequence                    | queries                     | result
    ${1} | ${[8, 7, 3, 1, 7, 0, 9, 4]} | ${[[1, 8], [2, 5], [7, 7]]} | ${[3, 1, 0]}
    ${2} | ${[0, 1, 2, 3, 3, 5]}       | ${[[1, 2], [1, 4], [3, 6]]} | ${[0, 0, 1]}
  `('Base test: $n', ({ sequence, queries, result }) => {
    expect(getQueriesResults(sequence, queries)).toStrictEqual(result);
  });
});
