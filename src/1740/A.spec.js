const { getPrimeNumber } = require('./A');

describe('1740A. Factorise N+M', () => {
  it.each`
    n    | num      | result
    ${1} | ${7}     | ${7}
    ${2} | ${2}     | ${2}
    ${3} | ${75619} | ${75619}
  `('Base test: $n', ({ num, result }) => {
    expect(getPrimeNumber(num)).toStrictEqual(result);
  });
});
