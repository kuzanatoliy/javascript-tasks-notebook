const { getPermutation } = require('./B');

describe('1844B. Permutations & Primes', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${[2, 1]}
    ${2} | ${1} | ${[1]}
    ${3} | ${5} | ${[2, 4, 1, 5, 3]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPermutation(num)).toStrictEqual(result);
  });
});
