const { getPermutation } = require('./B');

describe('1770B. Koxia and Permutation', () => {
  it.each`
    n    | num  | k    | result
    ${1} | ${5} | ${3} | ${[5, 1, 4, 2, 3]}
    ${2} | ${5} | ${1} | ${[5, 1, 4, 2, 3]}
    ${3} | ${6} | ${6} | ${[6, 1, 5, 2, 4, 3]}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getPermutation(num, k)).toStrictEqual(result);
  });
});
