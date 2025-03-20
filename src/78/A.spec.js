const { isHaiku } = require('./A');

describe('78A. Haiku', () => {
  it.each`
    n    | str1                  | str2                             | str3                                        | result
    ${1} | ${'on  codeforces'}   | ${'beta round is running'}       | ${'   a rustling of keys '}                 | ${'YES'}
    ${2} | ${'how many gallons'} | ${'of edo s rain did you drink'} | ${'                                cuckoo'} | ${'NO'}
  `('Base test: $n', ({ str1, str2, str3, result }) => {
    expect(isHaiku(str1, str2, str3)).toBe(result);
  });
});
