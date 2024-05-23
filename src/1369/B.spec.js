const { getCleanestString } = require('./B');

describe('1369B. AccurateLee', () => {
  it.each`
    n    | string          | result
    ${1} | ${'0001111111'} | ${'0001111111'}
    ${2} | ${'0101'}       | ${'001'}
    ${3} | ${'11001101'}   | ${'01'}
    ${4} | ${'1110000000'} | ${'0'}
    ${5} | ${'1'}          | ${'1'}
  `('Base test: $n', ({ string, result }) => {
    expect(getCleanestString(string)).toBe(result);
  });
});
