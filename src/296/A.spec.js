const { isItPossibleToTransform } = require('./A');

describe('296A. Yaroslav and Permutations', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[1]}          | ${'YES'}
    ${2} | ${[1, 1, 2]}    | ${'YES'}
    ${3} | ${[7, 7, 7, 7]} | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToTransform(arr)).toBe(result);
  });
});
