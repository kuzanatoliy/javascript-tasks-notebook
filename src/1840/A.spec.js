const { getDecryptedMessage } = require('./A');

describe('1840A. Cipher Shifer', () => {
  it.each`
    n    | expression                | result
    ${1} | ${'abacabac'}             | ${'ac'}
    ${2} | ${'qzxcq'}                | ${'q'}
    ${3} | ${'ccooddeeffoorrcceess'} | ${'codeforces'}
  `('Base test: $n', ({ expression, result }) => {
    expect(getDecryptedMessage(expression)).toBe(result);
  });
});
