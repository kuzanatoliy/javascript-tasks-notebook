const { isItPossibleToTransform } = require('./A');

describe('1253A. Single Push', () => {
  it.each`
    n    | arrA                  | arrB                  | result
    ${1} | ${[3, 7, 1, 4, 1, 2]} | ${[3, 7, 3, 6, 3, 2]} | ${'YES'}
    ${2} | ${[1, 1, 1, 1, 1]}    | ${[1, 2, 1, 3, 1]}    | ${'NO'}
    ${3} | ${[42, 42]}           | ${[42, 42]}           | ${'YES'}
    ${4} | ${[7]}                | ${[6]}                | ${'NO'}
    ${5} | ${[7, 7, 7, 7, 7]}    | ${[7, 8, 8, 9, 7]}    | ${'NO'}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(isItPossibleToTransform(arrA, arrB)).toBe(result);
  });
});
