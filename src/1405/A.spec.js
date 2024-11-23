const { getNewPermutation } = require('./A');

describe('1405A. String Similarity', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1, 2]}             | ${[2, 1]}
    ${2} | ${[2, 1, 6, 5, 4, 3]} | ${[3, 4, 5, 6, 1, 2]}
    ${3} | ${[2, 4, 3, 1, 5]}    | ${[5, 1, 3, 4, 2]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getNewPermutation(arr)).toStrictEqual(result);
  });
});
