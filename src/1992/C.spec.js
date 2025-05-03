const { getPermutation } = require('./C');

describe('1992C. Gorilla and Permutation', () => {
  it.each`
    n    | num   | m    | k    | result
    ${1} | ${5}  | ${2} | ${5} | ${[5, 4, 3, 1, 2]}
    ${2} | ${3}  | ${1} | ${3} | ${[3, 2, 1]}
    ${3} | ${10} | ${3} | ${8} | ${[10, 9, 8, 7, 6, 5, 4, 1, 2, 3]}
  `('Base test: $n', ({ num, m, k, result }) => {
    expect(getPermutation(num, m, k)).toStrictEqual(result);
  });
});
