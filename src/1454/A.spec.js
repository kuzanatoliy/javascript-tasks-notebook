const { getPermutation } = require('./A');

describe('1454A. Special Permutation', () => {
  it.each`
    n    | number | result
    ${1} | ${2}   | ${[2, 1]}
    ${2} | ${5}   | ${[2, 3, 4, 5, 1]}
  `('Base test: $n', ({ number, result }) => {
    expect(getPermutation(number)).toStrictEqual(result);
  });
});
