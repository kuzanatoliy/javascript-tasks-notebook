const { buildPermutation } = require('./C');

describe('1858C. Yet Another Permutation Problem', () => {
  it.each`
    n    | num   | result
    ${1} | ${5}  | ${[1, 2, 4, 3, 5]}
    ${2} | ${2}  | ${[1, 2]}
    ${3} | ${7}  | ${[1, 2, 4, 3, 6, 5, 7]}
    ${4} | ${10} | ${[1, 2, 4, 8, 3, 6, 5, 10, 7, 9]}
  `('Base test: $n', ({ num, result }) => {
    expect(buildPermutation(num)).toStrictEqual(result);
  });
});
