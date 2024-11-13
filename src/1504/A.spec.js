const { isItPossibleToGetNoPolindrome } = require('./A');

describe('1504A. Déjà Vu', () => {
  it.each`
    n    | str                   | result
    ${1} | ${'cbabc'}            | ${['YES', 'acbabc']}
    ${2} | ${'ab'}               | ${['YES', 'aab']}
    ${3} | ${'zza'}              | ${['YES', 'zzaa']}
    ${4} | ${'ba'}               | ${['YES', 'baa']}
    ${5} | ${'a'}                | ${['NO']}
    ${6} | ${'nutforajaroftuna'} | ${['YES', 'nutforajaroftunaa']}
  `('Base test: $n', ({ str, result }) => {
    expect(isItPossibleToGetNoPolindrome(str)).toStrictEqual(result);
  });
});
