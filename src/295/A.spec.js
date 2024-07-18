const { getResultArray } = require('./A');

describe('295A. Greg and Array', () => {
  it.each`
    n    | array           | operations                           | queries                                             | result
    ${1} | ${[1, 2, 3]}    | ${[[1, 2, 1], [1, 3, 2], [2, 3, 4]]} | ${[[1, 2], [1, 3], [2, 3]]}                         | ${[9, 18, 17]}
    ${2} | ${[1]}          | ${[[1, 1, 1]]}                       | ${[[1, 1]]}                                         | ${[2]}
    ${3} | ${[1, 2, 3, 4]} | ${[[1, 2, 1], [2, 3, 2], [3, 4, 4]]} | ${[[1, 2], [1, 3], [2, 3], [1, 2], [1, 3], [2, 3]]} | ${[5, 18, 31, 20]}
  `('Base test: $n', ({ array, operations, queries, result }) => {
    expect(getResultArray(array, operations, queries)).toStrictEqual(result);
  });
});
