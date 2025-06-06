const { isPatterExisted } = require('./A');

describe('1494A. ABC String', () => {
  it.each`
    n    | map         | result
    ${1} | ${'AABBAC'} | ${'YES'}
    ${2} | ${'CACA'}   | ${'YES'}
    ${3} | ${'BBBBAC'} | ${'NO'}
    ${4} | ${'ABCA'}   | ${'NO'}
    ${5} | ${'ABCB'}   | ${'YES'}
  `('Base test: $n', ({ map, result }) => {
    expect(isPatterExisted(map)).toBe(result);
  });
});
