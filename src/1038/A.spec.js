const { getLengthOfGoodLongestSubstr } = require('./A');

describe('1038A. Equality', () => {
  it.each`
    n    | str            | k    | result
    ${1} | ${'ACAABCCAB'} | ${3} | ${6}
    ${2} | ${'ABCABCABC'} | ${4} | ${0}
  `('Base test: $n', ({ str, k, result }) => {
    expect(getLengthOfGoodLongestSubstr(str, k)).toBe(result);
  });
});
