const { restorePermutation } = require('./B');

describe('1385B. Restore the Permutation by Merger', () => {
  it.each`
    n    | array                             | result
    ${1} | ${[1, 1, 2, 2]}                   | ${[1, 2]}
    ${2} | ${[1, 3, 1, 4, 3, 4, 2, 2]}       | ${[1, 3, 4, 2]}
    ${3} | ${[1, 2, 1, 2, 3, 4, 3, 5, 4, 5]} | ${[1, 2, 3, 4, 5]}
    ${4} | ${[1, 2, 3, 1, 2, 3]}             | ${[1, 2, 3]}
    ${5} | ${[2, 3, 2, 4, 1, 3, 4, 1]}       | ${[2, 3, 4, 1]}
  `('Base test: $n', ({ array, result }) => {
    expect(restorePermutation(array)).toStrictEqual(result);
  });
});
