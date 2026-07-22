const { isItPossibleToTransform } = require('./C2');

describe('2065C2. Skibidus and Fanum Tax (hard version)', () => {
  it.each`
    n    | arrA               | arrB                  | result
    ${1} | ${[5]}             | ${[9, 1, 1000000000]} | ${'YES'}
    ${2} | ${[1, 4, 3]}       | ${[3, 4]}             | ${'NO'}
    ${3} | ${[2, 4, 6, 5]}    | ${[6, 1, 8]}          | ${'YES'}
    ${4} | ${[6, 4, 5, 4, 5]} | ${[4, 1000]}          | ${'NO'}
    ${5} | ${[9, 8, 7]}       | ${[8]}                | ${'YES'}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(isItPossibleToTransform(arrA, arrB)).toBe(result);
  });
});
