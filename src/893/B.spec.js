const { getGreatestBeautifulDivisor } = require('./B');

describe('893B. Beautiful Divisors', () => {
  it.each`
    n    | order  | result
    ${1} | ${3}   | ${1}
    ${2} | ${992} | ${496}
  `('Base test: $n', ({ order, result }) => {
    expect(getGreatestBeautifulDivisor(order)).toBe(result);
  });
});
