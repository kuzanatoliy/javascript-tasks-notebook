const { getPermutation } = require('./B');

describe('1741B. Funny Permutation', () => {
  it.each`
    n    | num  | result
    ${1} | ${4} | ${[2, 1, 4, 3]}
    ${2} | ${3} | ${[-1]}
    ${3} | ${7} | ${[3, 4, 5, 6, 7, 1, 2]}
    ${4} | ${5} | ${[3, 4, 5, 1, 2]}
    ${5} | ${2} | ${[2, 1]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPermutation(num)).toStrictEqual(result);
  });
});
