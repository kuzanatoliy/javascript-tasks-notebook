const { getOriginalString } = require('./A');

describe('1095A. Repeating Cipher', () => {
  it.each`
    n    | string          | result
    ${1} | ${'baabbb'}     | ${'bab'}
    ${2} | ${'ooopppssss'} | ${'oops'}
    ${3} | ${'z'}          | ${'z'}
  `('Base test: $n', ({ string, result }) => {
    expect(getOriginalString(string)).toBe(result);
  });
});
