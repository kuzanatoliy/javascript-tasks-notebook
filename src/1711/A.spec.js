const { getPermutation } = require('./A');

describe('1711A. Perfect Permutation', () => {
  it.each`
    n    | origin | result
    ${1} | ${1}   | ${[1]}
    ${2} | ${4}   | ${[4, 1, 2, 3]}
  `('Base test: $n', ({ origin, result }) => {
    expect(getPermutation(origin)).toStrictEqual(result);
  });
});
