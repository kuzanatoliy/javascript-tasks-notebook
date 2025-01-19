const { getComplicatedGCD } = require('./A');

describe('664A. Complicated GCD', () => {
  it.each`
    n    | a    | b    | result
    ${1} | ${1} | ${2} | ${1}
    ${2} | ${2} | ${2} | ${2}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getComplicatedGCD(a, b)).toBe(result);
  });
});
