const { transformArray } = require('./B');

describe('1891B. Deja Vu', () => {
  it.each`
    n    | arr                         | queries            | result
    ${1} | ${[1, 2, 3, 4, 4]}          | ${[2, 3, 4]}       | ${[1, 2, 3, 6, 6]}
    ${2} | ${[7, 8, 12, 36, 48, 6, 3]} | ${[10, 4, 2]}      | ${[7, 10, 14, 38, 58, 6, 3]}
    ${3} | ${[2, 2, 2, 2, 2]}          | ${[1, 1, 1, 1]}    | ${[3, 3, 3, 3, 3]}
    ${4} | ${[1, 2, 4, 8, 16]}         | ${[5, 2, 3, 4, 1]} | ${[1, 3, 7, 11, 19]}
  `('Base test: $n', ({ arr, queries, result }) => {
    expect(transformArray(arr, queries)).toStrictEqual(result);
  });
});
