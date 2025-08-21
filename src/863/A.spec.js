const { isItQuasiPalindromic } = require('./A');

describe('863A. Between the Offices', () => {
  it.each`
    n    | str             | result
    ${1} | ${'131'}        | ${'YES'}
    ${2} | ${'320'}        | ${'NO'}
    ${3} | ${'2010200'}    | ${'YES'}
    ${3} | ${'1000000000'} | ${'YES'}
  `('Base test: $n', ({ str, result }) => {
    expect(isItQuasiPalindromic(str)).toStrictEqual(result);
  });
});
