const { getOriginalString } = require('./B');

describe('1473B. String LCM', () => {
  it.each`
    n    | strA      | strB     | result
    ${1} | ${'baba'} | ${'ba'}  | ${'baba'}
    ${2} | ${'aa'}   | ${'aaa'} | ${'aaaaaa'}
    ${3} | ${'aba'}  | ${'ab'}  | ${-1}
  `('Base test: $n', ({ strA, strB, result }) => {
    expect(getOriginalString(strA, strB)).toBe(result);
  });
});
