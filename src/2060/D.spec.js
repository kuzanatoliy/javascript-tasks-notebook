const { isItPossibleToTransform } = require('./D');

describe('2060D. Subtract Min Sort', () => {
  it.each`
    n    | arr                            | result
    ${1} | ${[1, 2, 3, 4, 5]}             | ${'YES'}
    ${2} | ${[4, 3, 2, 1]}                | ${'NO'}
    ${3} | ${[4, 5, 2, 3]}                | ${'YES'}
    ${4} | ${[4, 5, 4, 5, 4, 5, 4, 5]}    | ${'YES'}
    ${5} | ${[9, 9, 8, 2, 4, 4, 3, 5, 3]} | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToTransform(arr)).toBe(result);
  });
});
