const { isSatisfiesCondition } = require('./A');

describe('1722A. Spell Check', () => {
  it.each`
    n     | string          | result
    ${1}  | ${'Timur'}      | ${'YES'}
    ${2}  | ${'miurT'}      | ${'YES'}
    ${3}  | ${'Trumi'}      | ${'YES'}
    ${4}  | ${'mriTu'}      | ${'YES'}
    ${5}  | ${'timur'}      | ${'NO'}
    ${6}  | ${'Timr'}       | ${'NO'}
    ${7}  | ${'Timuur'}     | ${'NO'}
    ${8}  | ${'codeforces'} | ${'NO'}
    ${9}  | ${'TimurTimur'} | ${'NO'}
    ${10} | ${'TIMUR'}      | ${'NO'}
  `('Base test: $n', ({ string, result }) => {
    expect(isSatisfiesCondition(string)).toBe(result);
  });
});
