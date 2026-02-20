const { getMaxValue } = require('./C');

describe('1566A. Median Maximization', () => {
  it.each`
    n    | bstr1        | bstr2        | result
    ${1} | ${'0101000'} | ${'1101100'} | ${8}
    ${2} | ${'01100'}   | ${'10101'}   | ${8}
    ${3} | ${'01'}      | ${'01'}      | ${2}
    ${4} | ${'000000'}  | ${'111111'}  | ${12}
  `('Base test: $n', ({ bstr1, bstr2, result }) => {
    expect(getMaxValue(bstr1, bstr2)).toBe(result);
  });
});
