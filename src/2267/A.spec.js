const { getCost } = require('./A');

describe('2267A. Turn Into a Palindrome', () => {
  it.each`
    n    | char   | str             | result
    ${1} | ${'b'} | ${'abca'}       | ${1}
    ${2} | ${'p'} | ${'xyx'}        | ${0}
    ${3} | ${'e'} | ${'abcbb'}      | ${2}
    ${4} | ${'d'} | ${'adbccbad'}   | ${2}
    ${5} | ${'c'} | ${'codeforces'} | ${8}
  `('Base test: $n', ({ char, str, result }) => {
    expect(getCost(char, str)).toBe(result);
  });
});
