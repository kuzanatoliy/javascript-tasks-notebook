const { isItPossibleToTransform } = require('./A');

describe('2143A. All Lengths Subtraction', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 3, 4, 2]}    | ${'YES'}
    ${2} | ${[1, 5, 2, 4, 3]} | ${'NO'}
    ${3} | ${[2, 4, 5, 3, 1]} | ${'YES'}
    ${4} | ${[3, 1, 2]}       | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToTransform(arr)).toBe(result);
  });
});
