const { getCountOfVariants } = require('./A');

describe('2108A. Permutation Warm-Up', () => {
  it.each`
    n    | num   | result
    ${1} | ${2}  | ${2}
    ${2} | ${3}  | ${3}
    ${3} | ${8}  | ${17}
    ${4} | ${15} | ${57}
    ${5} | ${43} | ${463}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfVariants(num)).toBe(result);
  });
});
