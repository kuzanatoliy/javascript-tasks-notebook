const { isItPossibleToGetGoodSubsequence } = require('./B');

describe('1451B. Non-Substring Subsequence', () => {
  it.each`
    n    | str         | l    | r    | result
    ${1} | ${'001000'} | ${2} | ${4} | ${'YES'}
    ${2} | ${'001000'} | ${1} | ${3} | ${'NO'}
    ${3} | ${'001000'} | ${3} | ${5} | ${'YES'}
    ${4} | ${'1111'}   | ${1} | ${4} | ${'NO'}
    ${5} | ${'1111'}   | ${2} | ${3} | ${'YES'}
  `('Base test: $n', ({ str, l, r, result }) => {
    expect(isItPossibleToGetGoodSubsequence(str, l, r)).toBe(result);
  });
});
