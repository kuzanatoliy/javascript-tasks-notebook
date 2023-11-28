const { checkBeautifulYear } = require('./A');

describe('271A. Beautiful Year', () => {
  it.each`
    n    | year    | result
    ${1} | ${1987} | ${2013}
    ${2} | ${2013} | ${2014}
  `('Base test: $n', ({ year, result }) => {
    expect(checkBeautifulYear(year)).toBe(result);
  });
});
