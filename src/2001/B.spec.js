const { getPermutation } = require('./B');

describe('2001B. Generate Permutation', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${[1]}
    ${2} | ${2} | ${-1}
    ${3} | ${3} | ${[2, 3, 1]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPermutation(num)).toStrictEqual(result);
  });
});
