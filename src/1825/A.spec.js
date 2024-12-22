const { getStringLength } = require('./A');

describe('1825A. LuoTianyi and the Palindrome String', () => {
  it.each`
    n    | str                      | result
    ${1} | ${'abacaba'}             | ${6}
    ${2} | ${'aaa'}                 | ${-1}
    ${3} | ${'codeforcesecrofedoc'} | ${18}
    ${4} | ${'lol'}                 | ${2}
  `('Base test: $n', ({ str, result }) => {
    expect(getStringLength(str)).toBe(result);
  });
});
