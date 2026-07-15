const { getCandiesCount } = require('./E');

describe('1676E. Eating Queries', () => {
  it.each`
    n    | arr                         | queries                        | result
    ${1} | ${[4, 3, 3, 1, 1, 4, 5, 9]} | ${[1, 10, 50, 14, 15, 22, 30]} | ${[1, 2, -1, 2, 3, 4, 8]}
    ${2} | ${[1, 2, 3, 4]}             | ${[3]}                         | ${[1]}
    ${3} | ${[5]}                      | ${[4, 6]}                      | ${[1, -1]}
  `('Base test: $n', ({ arr, queries, result }) => {
    expect(getCandiesCount(arr, queries)).toStrictEqual(result);
  });
});
