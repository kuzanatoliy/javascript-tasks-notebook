const { getCountOfAdditionalCandies } = require('./A');

describe('2145A. Candies for Nephews', () => {
  it.each`
    n    | num   | result
    ${1} | ${7}  | ${2}
    ${2} | ${24} | ${0}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfAdditionalCandies(num)).toBe(result);
  });
});
