const { isPermutationsExisted } = require('./A');

describe('1761A. Two Permutations', () => {
  it.each`
    n    | num  | a    | b    | result
    ${1} | ${1} | ${1} | ${1} | ${'YES'}
    ${2} | ${2} | ${1} | ${2} | ${'NO'}
    ${3} | ${3} | ${1} | ${1} | ${'NO'}
    ${4} | ${4} | ${1} | ${1} | ${'YES'}
  `('Base test: $n', ({ num, a, b, result }) => {
    expect(isPermutationsExisted(num, a, b)).toBe(result);
  });
});
