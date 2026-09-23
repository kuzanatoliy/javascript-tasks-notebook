const { getPermutation } = require('./B');

describe('1712B. Woeful Permutation', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${[1]}
    ${2} | ${2} | ${[2, 1]}
    ${3} | ${3} | ${[1, 3, 2]}
    ${4} | ${4} | ${[2, 1, 4, 3]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPermutation(num)).toStrictEqual(result);
  });
});
