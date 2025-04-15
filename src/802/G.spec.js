const { isHeidiAsSubstr } = require('./G');

describe('802G. Fake News (easy)', () => {
  it.each`
    n    | str              | result
    ${1} | ${'abcheaibcdi'} | ${'YES'}
    ${2} | ${'hiedi'}       | ${'NO'}
  `('Base test: $n', ({ str, result }) => {
    expect(isHeidiAsSubstr(str)).toBe(result);
  });
});
