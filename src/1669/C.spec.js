const { isItPossibleToTransform } = require('./C');

describe('1669C. Odd/Even Increments', () => {
  it.each`
    n    | array                       | result
    ${1} | ${[1, 2, 1]}                | ${'YES'}
    ${2} | ${[2, 2, 2, 3]}             | ${'NO'}
    ${3} | ${[2, 2, 2, 2]}             | ${'YES'}
    ${4} | ${[1000, 1, 1000, 1, 1000]} | ${'YES'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToTransform(array)).toBe(result);
  });
});
