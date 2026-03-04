const { getPermutation } = require('./A');

describe('2188A. Divisible Permutation', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${[2, 1]}
    ${2} | ${3} | ${[2, 3, 1]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPermutation(num)).toStrictEqual(result);
  });
});
