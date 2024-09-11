const { getMinSum } = require('./C');

describe('1691C. Sum of Substrings', () => {
  it.each`
    n    | str          | k    | result
    ${1} | ${'1010'}    | ${0} | ${21}
    ${2} | ${'0010100'} | ${1} | ${22}
    ${3} | ${'00110'}   | ${2} | ${12}
    ${4} | ${'01'}      | ${2} | ${1}
    ${5} | ${'10'}      | ${2} | ${1}
  `('Base test: $n', ({ str, k, result }) => {
    expect(getMinSum(str, k)).toBe(result);
  });
});
