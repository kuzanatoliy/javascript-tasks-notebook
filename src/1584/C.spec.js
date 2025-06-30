const { isItPossibleToTransform } = require('./C');

describe('1584C. Two Arrays', () => {
  it.each`
    n    | arrA               | arrB               | result
    ${1} | ${[-1, 1, 0]}      | ${[0, 0, 2]}       | ${'YES'}
    ${2} | ${[0]}             | ${[2]}             | ${'NO'}
    ${3} | ${[1, 2, 3, 4, 5]} | ${[1, 2, 3, 4, 5]} | ${'YES'}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(isItPossibleToTransform(arrA, arrB)).toStrictEqual(result);
  });
});
