const { getCountOfDif } = require('./A');

describe('1829A. Love Story', () => {
  it.each`
    n    | string          | result
    ${1} | ${'coolforsez'} | ${4}
    ${2} | ${'cadafurcie'} | ${5}
    ${3} | ${'codeforces'} | ${0}
    ${4} | ${'paiuforces'} | ${4}
    ${5} | ${'forcescode'} | ${9}
  `('Base test: $n', ({ string, result }) => {
    expect(getCountOfDif(string)).toBe(result);
  });
});
