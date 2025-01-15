const { isItPossibleToTransform } = require('./A');

describe('1445A. Array Rearrangment', () => {
  it.each`
    n    | arrA            | arrB            | x    | result
    ${1} | ${[1, 2, 3]}    | ${[1, 1, 2]}    | ${4} | ${'YES'}
    ${2} | ${[1, 4]}       | ${[2, 5]}       | ${6} | ${'YES'}
    ${3} | ${[1, 2, 3, 4]} | ${[1, 2, 3, 4]} | ${4} | ${'NO'}
    ${4} | ${[5]}          | ${[5]}          | ${5} | ${'NO'}
  `('Base test: $n', ({ arrA, arrB, x, result }) => {
    expect(isItPossibleToTransform(arrA, arrB, x)).toBe(result);
  });
});
