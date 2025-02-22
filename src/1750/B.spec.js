const { getMaxCost } = require('./B');

describe('1750B. Maximum Substring', () => {
  it.each`
    n    | str          | result
    ${1} | ${'11100'}   | ${9}
    ${2} | ${'1100110'} | ${12}
    ${3} | ${'011110'}  | ${16}
    ${4} | ${'1001010'} | ${12}
    ${5} | ${'1000'}    | ${9}
    ${6} | ${'0'}       | ${1}
  `('Base test: $n', ({ str, result }) => {
    expect(getMaxCost(str)).toBe(result);
  });
});
