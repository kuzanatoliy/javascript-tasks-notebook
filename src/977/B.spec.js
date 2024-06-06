const { getSubString } = require('./B');

describe('977B. Two-gram', () => {
  it.each`
    n    | string       | result
    ${1} | ${'ABACABA'} | ${'AB'}
    ${2} | ${'ZZZAA'}   | ${'ZZ'}
  `('Base test: $n', ({ string, result }) => {
    expect(getSubString(string)).toBe(result);
  });
});
