const { getPrimes } = require('./A');

describe('749A. Bachgold Problem', () => {
  it.each`
    n    | number | result
    ${1} | ${5}   | ${[3, 2]}
    ${2} | ${6}   | ${[2, 2, 2]}
  `('Base test: $n', ({ number, result }) => {
    expect(getPrimes(number)).toStrictEqual(result);
  });
});
