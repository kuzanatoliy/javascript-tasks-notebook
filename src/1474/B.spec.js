const { getNumber } = require('./B');

describe('1474B. Different Divisors', () => {
  it.each`
    n    | d      | result
    ${1} | ${1}   | ${6}
    ${2} | ${2}   | ${15}
    ${3} | ${381} | ${294527}
  `('Base test: $n', ({ d, result }) => {
    expect(getNumber(d)).toBe(result);
  });
});
