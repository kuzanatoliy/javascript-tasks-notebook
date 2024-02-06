const { getMaxGCD } = require('./A');

describe('1370A. Maximum GCD', () => {
  it.each`
    n    | number | result
    ${1} | ${3}   | ${1}
    ${2} | ${5}   | ${2}
  `('Base test: $n', ({ number, result }) => {
    expect(getMaxGCD(number)).toBe(result);
  });
});
