const { getPermutation } = require('./B');

describe('1930B. Permutation Printing', () => {
  it.each`
    n    | num  | result
    ${1} | ${4} | ${[4, 1, 3, 2]}
    ${2} | ${3} | ${[3, 1, 2]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPermutation(num)).toStrictEqual(result);
  });
});
