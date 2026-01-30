const { isItPossibleToTransformToPolindrome } = require('./A');

describe('798A. Mike and palindrome', () => {
  it.each`
    n    | str         | result
    ${1} | ${'abccaa'} | ${'YES'}
    ${2} | ${'abbcca'} | ${'NO'}
    ${3} | ${'abcda'}  | ${'YES'}
    ${4} | ${'fccf'}   | ${'NO'}
    ${5} | ${'glxlg'}  | ${'YES'}
  `('Base test: $n', ({ str, result }) => {
    expect(isItPossibleToTransformToPolindrome(str)).toBe(result);
  });
});
