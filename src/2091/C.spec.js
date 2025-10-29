const { getPermutation } = require('./C');

describe('2091C. Combination Lock', () => {
  it.each`
    n    | num  | result
    ${1} | ${4} | ${[-1]}
    ${2} | ${5} | ${[5, 4, 3, 2, 1]}
    ${3} | ${3} | ${[3, 2, 1]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPermutation(num)).toStrictEqual(result);
  });
});
