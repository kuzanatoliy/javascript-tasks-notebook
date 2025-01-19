const { getMinDif } = require('./A');

describe('1574A. Luntik and Concerts', () => {
  it.each`
    n    | a    | b    | c    | result
    ${1} | ${1} | ${1} | ${1} | ${0}
    ${2} | ${2} | ${1} | ${3} | ${1}
    ${3} | ${5} | ${5} | ${5} | ${0}
    ${4} | ${1} | ${1} | ${2} | ${1}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(getMinDif(a, b, c)).toBe(result);
  });
});
