const { getOriginalString } = require('./B');

describe('807B. Valued Keys', () => {
  it.each`
    n    | str1       | str2       | result
    ${1} | ${'ab'}    | ${'aa'}    | ${'aa'}
    ${2} | ${'nzwzl'} | ${'niwel'} | ${'niwel'}
    ${3} | ${'ab'}    | ${'ba'}    | ${-1}
  `('Base test: $n', ({ str1, str2, result }) => {
    expect(getOriginalString(str1, str2)).toBe(result);
  });
});
