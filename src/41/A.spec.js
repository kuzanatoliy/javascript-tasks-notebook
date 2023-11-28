const { isPalindrom } = require('./A');

describe('41A. Translation', () => {
  it.each`
    n    | word1     | word2     | result
    ${1} | ${'code'} | ${'edoc'} | ${'YES'}
    ${2} | ${'abb'}  | ${'aba'}  | ${'NO'}
    ${3} | ${'code'} | ${'code'} | ${'NO'}
  `('Base test: $n', ({ word1, word2, result }) => {
    expect(isPalindrom(word1, word2)).toBe(result);
  });
});
