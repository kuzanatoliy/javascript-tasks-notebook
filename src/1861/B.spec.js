const { isItPossibleToTransform } = require('./B');

describe('1861B. Two Binary Strings', () => {
  it.each`
    n    | strA          | strB          | result
    ${1} | ${'01010001'} | ${'01110101'} | ${'YES'}
    ${2} | ${'01001'}    | ${'01001'}    | ${'YES'}
    ${3} | ${'000101'}   | ${'010111'}   | ${'YES'}
    ${4} | ${'00001'}    | ${'01111'}    | ${'NO'}
    ${5} | ${'011'}      | ${'001'}      | ${'NO'}
    ${6} | ${'001001'}   | ${'011011'}   | ${'NO'}
    ${7} | ${'010001'}   | ${'011011'}   | ${'YES'}
  `('Base test: $n', ({ strA, strB, result }) => {
    expect(isItPossibleToTransform(strA, strB)).toBe(result);
  });
});
