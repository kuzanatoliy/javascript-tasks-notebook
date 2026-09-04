const { isItPossibleToTransform } = require('./C1');

describe('2254C1. Marenol (easy version)', () => {
  it.each`
    n    | strA         | strB         | result
    ${1} | ${'0'}       | ${'0'}       | ${'YES'}
    ${2} | ${'01'}      | ${'10'}      | ${'NO'}
    ${3} | ${'001'}     | ${'100'}     | ${'YES'}
    ${4} | ${'1010'}    | ${'0101'}    | ${'NO'}
    ${5} | ${'1100'}    | ${'1000'}    | ${'NO'}
    ${6} | ${'01001'}   | ${'10010'}   | ${'YES'}
    ${7} | ${'110000'}  | ${'000011'}  | ${'YES'}
    ${8} | ${'111000'}  | ${'000111'}  | ${'NO'}
    ${9} | ${'1001100'} | ${'0000111'} | ${'YES'}
  `('Base test: $n', ({ strA, strB, result }) => {
    expect(isItPossibleToTransform(strA, strB)).toBe(result);
  });
});
