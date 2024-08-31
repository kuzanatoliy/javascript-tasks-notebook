const { getPermutation } = require('./A');

describe('1831A. Twin Permutations', () => {
  it.each`
    n    | array              | result
    ${1} | ${[1, 2, 4, 5, 3]} | ${[5, 4, 2, 1, 3]}
    ${2} | ${[1, 2]}          | ${[2, 1]}
    ${3} | ${[1]}             | ${[1]}
    ${4} | ${[3, 2, 1]}       | ${[1, 2, 3]}
    ${5} | ${[1, 4, 3, 2]}    | ${[4, 1, 2, 3]}
  `('Base test: $n', ({ array, result }) => {
    expect(getPermutation(array)).toStrictEqual(result);
  });
});
