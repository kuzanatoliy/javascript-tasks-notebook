const { getMaxInteger } = require('./C');

describe('515C. Drazil and Factorial', () => {
  it.each`
    n    | string    | result
    ${1} | ${'1234'} | ${'33222'}
    ${2} | ${'555'}  | ${'555'}
  `('Base test: $n', ({ string, result }) => {
    expect(getMaxInteger(string)).toBe(result);
  });
});
