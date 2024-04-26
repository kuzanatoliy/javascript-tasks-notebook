const { hasOddDivisor } = require('./A');

describe('1475A. Odd Divisor', () => {
  it.each`
    n    | number           | result
    ${1} | ${2}             | ${'NO'}
    ${2} | ${3}             | ${'YES'}
    ${3} | ${4}             | ${'NO'}
    ${4} | ${5}             | ${'YES'}
    ${5} | ${998244353}     | ${'YES'}
    ${6} | ${1099511627776} | ${'NO'}
  `('Base test: $n', ({ number, result }) => {
    expect(hasOddDivisor(number)).toBe(result);
  });
});
