const { transformPermutation } = require('./B');

describe('1689B. Mystic Permutation', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 2, 3]}       | ${[2, 3, 1]}
    ${2} | ${[2, 3, 4, 5, 1]} | ${[1, 2, 3, 4, 5]}
    ${3} | ${[2, 3, 1, 4]}    | ${[1, 2, 4, 3]}
    ${4} | ${[1]}             | ${[-1]}
  `('Base test: $n', ({ arr, result }) => {
    expect(transformPermutation(arr)).toStrictEqual(result);
  });
});
