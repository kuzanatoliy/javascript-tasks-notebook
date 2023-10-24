const { checkStringEquivalence } = require('./A');

describe('112A. Petya and Strings', () => {
  it.each`
    n    | str1         | str2         | result
    ${1} | ${'aaaa'}    | ${'aaaA'}    | ${0}
    ${2} | ${'abs'}     | ${'Abz'}     | ${-1}
    ${3} | ${'abcdefg'} | ${'AbCdEfF'} | ${1}
  `('Base test: $n', ({ str1, str2, result }) => {
    expect(checkStringEquivalence(str1, str2)).toBe(result);
  });
});
