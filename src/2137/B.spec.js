const { getPermutation } = require('./B');

describe('2137B. Fun Permutation', () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[2, 3, 1]}             | ${[2, 1, 3]}
    ${2} | ${[5, 1, 2, 4, 3]}       | ${[1, 5, 4, 2, 3]}
    ${3} | ${[6, 7, 1, 5, 4, 3, 2]} | ${[2, 1, 7, 3, 4, 5, 6]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getPermutation(arr)).toStrictEqual(result);
  });
});
