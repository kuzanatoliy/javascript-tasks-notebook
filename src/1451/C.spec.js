const { isItPossibleToTransform } = require('./B');

describe('1451C. String Equality', () => {
  it.each`
    n    | strA        | strB        | k    | result
    ${1} | ${'abc'}    | ${'bcd'}    | ${3} | ${'NO'}
    ${2} | ${'abba'}   | ${'azza'}   | ${2} | ${'YES'}
    ${3} | ${'zz'}     | ${'aa'}     | ${1} | ${'NO'}
    ${4} | ${'aaabba'} | ${'ddddcc'} | ${2} | ${'YES'}
  `('Base test: $n', ({ strA, strB, k, result }) => {
    expect(isItPossibleToTransform(strA, strB, k)).toBe(result);
  });
});
