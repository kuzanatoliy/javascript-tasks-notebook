const { getPermutations } = require('./B');

describe('1644B. Anti-Fibonacci Permutation', () => {
  it.each`
    n    | num  | result
    ${1} | ${4} | ${[[4, 3, 2, 1], [1, 4, 3, 2], [2, 4, 3, 1], [3, 4, 2, 1]]}
    ${2} | ${3} | ${[[3, 2, 1], [1, 3, 2], [2, 3, 1]]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPermutations(num)).toStrictEqual(result);
  });
});
