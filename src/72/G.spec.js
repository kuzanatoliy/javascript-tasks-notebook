const { getFibonacciNumber } = require('./G');

describe('72G. Fibonacci army', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${2}
    ${2} | ${1} | ${1}
  `('Base test: $n', ({ num, result }) => {
    expect(getFibonacciNumber(num)).toBe(result);
  });
});
