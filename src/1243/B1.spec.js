const { isItPossibleToTransform } = require('./B1');

describe('1243A. Maximum Square', () => {
  it.each`
    n    | str1       | str2       | result
    ${1} | ${'souse'} | ${'houhe'} | ${'YES'}
    ${2} | ${'cat'}   | ${'dog'}   | ${'NO'}
    ${3} | ${'aa'}    | ${'az'}    | ${'NO'}
    ${4} | ${'abc'}   | ${'bca'}   | ${'NO'}
  `('Base test: $n', ({ str1, str2, result }) => {
    expect(isItPossibleToTransform(str1, str2)).toBe(result);
  });
});
