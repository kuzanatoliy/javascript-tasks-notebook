const { getLoser } = require('./A');

describe('811A. Vladik and Courtesy', () => {
  it.each`
    n    | a    | b    | result
    ${1} | ${1} | ${1} | ${'Valera'}
    ${2} | ${7} | ${6} | ${'Vladik'}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getLoser(a, b)).toBe(result);
  });
});
