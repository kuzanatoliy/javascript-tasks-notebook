const { buildMap } = require('./B');

describe('1867B. XOR Palindromes', () => {
  it.each`
    n    | str            | result
    ${1} | ${'101011'}    | ${'0010100'}
    ${2} | ${'00000'}     | ${'111111'}
    ${3} | ${'100100011'} | ${'0011111100'}
    ${4} | ${'100'}       | ${'0110'}
    ${5} | ${'1'}         | ${'11'}
  `('Base test: $n', ({ str, result }) => {
    expect(buildMap(str)).toStrictEqual(result);
  });
});
