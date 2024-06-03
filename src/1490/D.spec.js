const { getPermutation } = require('./D');

describe('1490D. Permutation Transformation', () => {
  it.each`
    n    | array              | result
    ${1} | ${[3, 5, 2, 1, 4]} | ${[1, 0, 2, 3, 1]}
    ${2} | ${[1]}             | ${[0]}
    ${3} | ${[4, 3, 1, 2]}    | ${[0, 1, 3, 2]}
  `('Base test: $n', ({ array, result }) => {
    expect(getPermutation(array)).toStrictEqual(result);
  });
});
