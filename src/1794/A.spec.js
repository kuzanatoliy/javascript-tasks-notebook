const { isItPolindrome } = require('./A');

describe('1794A. Prefix and Suffix Array', () => {
  it.each`
    n    | strs                                    | result
    ${1} | ${['bcd', 'cd', 'a', 'd', 'abc', 'ab']} | ${'NO'}
    ${2} | ${['i', 'io', 'i', 'oi']}               | ${'YES'}
    ${3} | ${['g', 'g']}                           | ${'YES'}
    ${4} | ${['t', 'al', 'lt', 'a']}               | ${'NO'}
    ${5} | ${['bba', 'a', 'ab', 'a', 'abb', 'ba']} | ${'YES'}
  `('Base test: $n', ({ strs, result }) => {
    expect(isItPolindrome(strs)).toBe(result);
  });
});
