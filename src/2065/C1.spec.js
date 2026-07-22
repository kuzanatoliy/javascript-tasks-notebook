const { isItPossibleToTransform } = require('./C1');

describe('2065C1. Skibidus and Fanum Tax (easy version)', () => {
  it.each`
    n    | arrA             | arrB   | result
    ${1} | ${[5]}           | ${[9]} | ${'YES'}
    ${2} | ${[1, 4, 3]}     | ${[3]} | ${'NO'}
    ${3} | ${[1, 4, 2, 5]}  | ${[6]} | ${'YES'}
    ${4} | ${[5, 4, 10, 5]} | ${[4]} | ${'NO'}
    ${5} | ${[9, 8, 7]}     | ${[8]} | ${'YES'}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(isItPossibleToTransform(arrA, arrB)).toBe(result);
  });
});
