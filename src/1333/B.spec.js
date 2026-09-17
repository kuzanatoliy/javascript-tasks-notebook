const { isItPossibleToTransform } = require('./B');

describe('1333B. Kind Anton', () => {
  it.each`
    n    | arrA                 | arrB                 | result
    ${1} | ${[1, -1, 0]}        | ${[1, 1, -2]}        | ${'YES'}
    ${2} | ${[0, 1, 1]}         | ${[0, 2, 2]}         | ${'NO'}
    ${3} | ${[1, 0]}            | ${[1, 41]}           | ${'YES'}
    ${4} | ${[-1, 0]}           | ${[-1, -41]}         | ${'YES'}
    ${5} | ${[0, 1, -1, 1, -1]} | ${[1, 1, -1, 1, -1]} | ${'NO'}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(isItPossibleToTransform(arrA, arrB)).toBe(result);
  });
});
