const { getPermutation } = require('./E');

describe('1927E. Klever Permutation', () => {
  it.each`
    n    | num   | k    | result
    ${1} | ${2}  | ${2} | ${[1, 2]}
    ${2} | ${3}  | ${2} | ${[1, 3, 2]}
    ${3} | ${10} | ${4} | ${[1, 8, 4, 10, 2, 7, 5, 9, 3, 6]}
    ${4} | ${13} | ${4} | ${[1, 13, 5, 10, 2, 12, 6, 9, 3, 11, 7, 8, 4]}
    ${5} | ${7}  | ${4} | ${[1, 6, 3, 7, 2, 5, 4]}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getPermutation(num, k)).toStrictEqual(result);
  });
});
