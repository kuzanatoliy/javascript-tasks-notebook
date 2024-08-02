const { decodeString } = require('./B');

describe('1974B. Symmetric Encoding', () => {
  it.each`
    n    | string               | result
    ${1} | ${'serofedsoc'}      | ${'codeforces'}
    ${2} | ${'ttf'}             | ${'fft'}
    ${3} | ${'tlrhgmaoi'}       | ${'algorithm'}
    ${4} | ${'w'}               | ${'w'}
    ${5} | ${'hnndledmnhlttin'} | ${'meetinthemiddle'}
  `('Base test: $n', ({ string, result }) => {
    expect(decodeString(string)).toBe(result);
  });
});
