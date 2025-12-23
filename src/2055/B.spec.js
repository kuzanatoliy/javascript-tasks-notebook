const { isItPossibleToTransform } = require('./B');

describe('2055A. Two Frogs', () => {
  it.each`
    n    | arrA            | arrB            | result
    ${1} | ${[0, 5, 5, 1]} | ${[1, 4, 4, 0]} | ${'YES'}
    ${2} | ${[1, 1, 3]}    | ${[2, 2, 1]}    | ${'NO'}
    ${3} | ${[1, 10]}      | ${[3, 3]}       | ${'YES'}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(isItPossibleToTransform(arrA, arrB)).toBe(result);
  });
});
