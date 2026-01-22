const { getPermutation } = require('./C');

describe("2037C. Superultra's Favorite Permutation", () => {
  it.each`
    n    | num  | result
    ${1} | ${3} | ${[-1]}
    ${2} | ${8} | ${[1, 3, 7, 5, 4, 6, 8, 2]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPermutation(num)).toStrictEqual(result);
  });
});
