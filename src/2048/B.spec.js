const { getPermutation } = require('./B');

describe('2048B. Kevin and Permutation', () => {
  it.each`
    n    | num  | k    | result
    ${1} | ${4} | ${2} | ${[3, 1, 4, 2]}
    ${2} | ${6} | ${1} | ${[1, 2, 3, 4, 5, 6]}
    ${3} | ${8} | ${3} | ${[6, 3, 1, 7, 4, 2, 8, 5]}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getPermutation(num, k)).toStrictEqual(result);
  });
});
