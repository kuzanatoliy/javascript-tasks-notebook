const { getPermutation } = require('./B');

describe('1743B. Permutation Value', () => {
  it.each`
    n    | num  | result
    ${1} | ${5} | ${[1, 5, 2, 4, 3]}
    ${2} | ${6} | ${[1, 6, 2, 5, 3, 4]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPermutation(num)).toStrictEqual(result);
  });
});
