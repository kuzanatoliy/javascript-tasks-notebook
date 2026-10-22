const { buildStrings } = require('./B');

describe('1304B. Longest Palindrome', () => {
  it.each`
    n    | strs                                                                        | result
    ${1} | ${['tab', 'one', 'bat']}                                                    | ${'tabbat'}
    ${2} | ${['oo', 'ox', 'xo', 'xx']}                                                 | ${'oxooxo'}
    ${3} | ${['hello', 'codef', 'orces']}                                              | ${''}
    ${4} | ${['abab', 'baba', 'abcd', 'bcde', 'cdef', 'defg', 'wxyz', 'zyxw', 'ijji']} | ${'wxyzababijjibabazyxw'}
  `('Base test: $n', ({ strs, result }) => {
    expect(buildStrings(strs)).toBe(result);
  });
});
