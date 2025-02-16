const { createString } = require('./A');

describe('1689A. Lex String', () => {
  it.each`
    n    | str1         | str2           | k    | result
    ${1} | ${'aaaaaa'}  | ${'bbbb'}      | ${2} | ${'aabaabaa'}
    ${2} | ${'caaca'}   | ${'bedededeb'} | ${3} | ${'aaabbcc'}
    ${3} | ${'noskill'} | ${'wxhtzdy'}   | ${1} | ${'dihktlwlxnyoz'}
  `('Base test: $n', ({ str1, str2, k, result }) => {
    expect(createString(str1, str2, k)).toBe(result);
  });
});
