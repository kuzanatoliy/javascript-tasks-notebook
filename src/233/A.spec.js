const { getPermutation } = require('./A');

describe('233A. Perfect Permutation', () => {
  it.each`
    n    | number | result
    ${1} | ${1}   | ${-1}
    ${2} | ${2}   | ${[2, 1]}
    ${2} | ${4}   | ${[2, 1, 4, 3]}
  `('Base test: $n', ({ number, result }) => {
    expect(getPermutation(number)).toStrictEqual(result);
  });
});
