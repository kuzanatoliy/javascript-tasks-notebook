const { getPermutation } = require('./A');

describe('1541A. Pretty Permutations', () => {
  it.each`
    n    | array | result
    ${1} | ${2}  | ${[2, 1]}
    ${2} | ${3}  | ${[2, 3, 1]}
  `('Base test: $n', ({ array, result }) => {
    expect(getPermutation(array)).toStrictEqual(result);
  });
});
