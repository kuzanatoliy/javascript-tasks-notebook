const { getLongestSubstring } = require('./C');

describe('676C. Vasya and String', () => {
  it.each`
    n    | count | string        | result
    ${1} | ${2}  | ${'abba'}     | ${4}
    ${2} | ${1}  | ${'aabaabaa'} | ${5}
  `('Base test: $n', ({ count, string, result }) => {
    expect(getLongestSubstring(count, string)).toBe(result);
  });
});
