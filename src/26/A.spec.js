const { getCountOfPrimeNumbers } = require('./A');

describe('26A. Almost Prime', () => {
  it.each`
    n    | number | result
    ${1} | ${10}  | ${2}
    ${2} | ${21}  | ${8}
  `('Base test: $n', ({ number, result }) => {
    expect(getCountOfPrimeNumbers(number)).toBe(result);
  });
});
