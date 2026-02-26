const { isItPossibleToBuildMask } = require('./B');

describe('1796A. Typical Interview Problem', () => {
  it.each`
    n    | str1            | str2         | result
    ${1} | ${'aaab'}       | ${'zzzb'}    | ${['YES', '*b']}
    ${2} | ${'codeforces'} | ${'atcoder'} | ${['YES', '*co*']}
    ${3} | ${'codeforces'} | ${'tokitlx'} | ${['NO']}
    ${1} | ${'aaaa'}       | ${'aaaaaa'}  | ${['YES', 'a*']}
    ${2} | ${'abcd'}       | ${'abcd'}    | ${['YES', 'a*']}
    ${3} | ${'c'}          | ${'f'}       | ${['NO']}
  `('Base test: $n', ({ str1, str2, result }) => {
    expect(isItPossibleToBuildMask(str1, str2)).toStrictEqual(result);
  });
});
