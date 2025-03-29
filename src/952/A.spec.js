const { getMod } = require('./A');

describe('952A. Quirky Quantifiers', () => {
  it.each`
    n    | num    | result
    ${1} | ${13}  | ${1}
    ${2} | ${927} | ${1}
    ${3} | ${48}  | ${0}
  `('Base test: $n', ({ num, result }) => {
    expect(getMod(num)).toBe(result);
  });
});
