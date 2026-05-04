const { getPermutation } = require('./C');

describe('2218A. The 67th Integer Problem', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${[1, 3, 4, 2, 5, 6]}
    ${2} | ${1} | ${[1, 2, 3]}
    ${3} | ${3} | ${[1, 4, 5, 2, 6, 7, 3, 8, 9]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPermutation(num)).toStrictEqual(result);
  });
});
