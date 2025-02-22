const { isItPossibleToTransform } = require('./B');

describe('1789B. Serval and Inversion Magic', () => {
  it.each`
    n    | str          | result
    ${1} | ${'1001'}    | ${'YES'}
    ${2} | ${'10010'}   | ${'YES'}
    ${3} | ${'0111011'} | ${'NO'}
  `('Base test: $n', ({ str, result }) => {
    expect(isItPossibleToTransform(str)).toBe(result);
  });
});
