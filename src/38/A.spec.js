const { getFullTerm } = require('./A');

describe('38A. Army', () => {
  it.each`
    n    | terms          | a    | b    | result
    ${1} | ${[5, 6]}      | ${1} | ${2} | ${5}
    ${2} | ${[5, 6]}      | ${1} | ${3} | ${11}
    ${3} | ${[63, 4, 49]} | ${2} | ${3} | ${4}
  `('Base test: $n', ({ terms, a, b, result }) => {
    expect(getFullTerm(terms, a, b)).toBe(result);
  });
});
