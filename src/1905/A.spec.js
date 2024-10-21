const { getMinCountOfCities } = require('./A');

describe('1905A. Constructive Problems', () => {
  it.each`
    n    | r    | c    | result
    ${1} | ${2} | ${2} | ${2}
    ${2} | ${5} | ${7} | ${7}
    ${3} | ${3} | ${2} | ${3}
  `('Base test: $n', ({ r, c, result }) => {
    expect(getMinCountOfCities(r, c)).toBe(result);
  });
});
