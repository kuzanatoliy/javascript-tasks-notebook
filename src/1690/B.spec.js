const { isItPossibleToTransform } = require('./B');

describe('1690B. Array Decrements', () => {
  it.each`
    n    | arrayA             | arrayB             | result
    ${1} | ${[3, 5, 4, 1]}    | ${[1, 3, 2, 0]}    | ${'YES'}
    ${2} | ${[1, 2, 1]}       | ${[0, 1, 0]}       | ${'YES'}
    ${3} | ${[5, 3, 7, 2]}    | ${[1, 1, 1, 1]}    | ${'NO'}
    ${4} | ${[1, 2, 3, 4, 5]} | ${[1, 2, 3, 4, 6]} | ${'NO'}
    ${5} | ${[8]}             | ${[0]}             | ${'YES'}
    ${6} | ${[4]}             | ${[6]}             | ${'NO'}
  `('Base test: $n', ({ arrayA, arrayB, result }) => {
    expect(isItPossibleToTransform(arrayA, arrayB)).toStrictEqual(result);
  });
});
