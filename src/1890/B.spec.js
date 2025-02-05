const { isItPossibleToTransform } = require('./B');

describe('1890B. Qingshan Loves Strings', () => {
  it.each`
    n    | strS            | strT         | result
    ${1} | ${'1'}          | ${'0'}       | ${'YES'}
    ${2} | ${'111'}        | ${'010'}     | ${'YES'}
    ${3} | ${'111'}        | ${'00'}      | ${'NO'}
    ${4} | ${'101100'}     | ${'1010101'} | ${'NO'}
    ${5} | ${'1001001000'} | ${'10'}      | ${'NO'}
  `('Base test: $n', ({ strS, strT, result }) => {
    expect(isItPossibleToTransform(strS, strT)).toBe(result);
  });
});
