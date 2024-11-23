const { getSubstr } = require('./A');

describe('1400A. String Similarity', () => {
  it.each`
    n    | str          | k    | result
    ${1} | ${'1'}       | ${1} | ${'1'}
    ${2} | ${'00000'}   | ${3} | ${'000'}
    ${3} | ${'1110000'} | ${4} | ${'1100'}
    ${4} | ${'101'}     | ${2} | ${'11'}
  `('Base test: $n', ({ str, k, result }) => {
    expect(getSubstr(str, k)).toBe(result);
  });
});
