const { isGoodString } = require('./A');

describe('2003A. Turtle and Good Strings', () => {
  it.each`
    n    | str               | result
    ${1} | ${'aa'}           | ${'NO'}
    ${2} | ${'aba'}          | ${'NO'}
    ${3} | ${'abcb'}         | ${'YES'}
    ${4} | ${'abcabcabcabc'} | ${'YES'}
  `('Base test: $n', ({ str, result }) => {
    expect(isGoodString(str)).toBe(result);
  });
});
