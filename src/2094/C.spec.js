const { getPermutation } = require('./C');

describe('2094C. Brr Brrr Patapim', () => {
  it.each`
    n    | matrix                               | result
    ${1} | ${[[1, 6, 2], [6, 2, 4], [2, 4, 3]]} | ${[5, 1, 6, 2, 4, 3]}
    ${2} | ${[[1]]}                             | ${[2, 1]}
    ${3} | ${[[2, 3], [3, 4]]}                  | ${[1, 2, 3, 4]}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getPermutation(matrix)).toStrictEqual(result);
  });
});
