const { getPermutation } = require('./A');

describe('1867A. green_gold_dog, array and permutation', () => {
  it.each`
    n    | array         | result
    ${1} | ${[100000]}   | ${[1]}
    ${2} | ${[1, 1]}     | ${[2, 1]}
    ${3} | ${[10, 3, 3]} | ${[1, 3, 2]}
  `('Base test: $n', ({ array, result }) => {
    expect(getPermutation(array)).toStrictEqual(result);
  });
});
