const { isItPossibleToTransform } = require('./B');

describe('1941B. Rudolf and 121', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1, 3, 5, 5, 2]}    | ${'YES'}
    ${2} | ${[2, 4, 4, 5, 1]}    | ${'NO'}
    ${3} | ${[0, 1, 3, 3, 1]}    | ${'YES'}
    ${4} | ${[5, 6, 0, 2, 3, 0]} | ${'NO'}
    ${5} | ${[1, 2, 7, 2]}       | ${'NO'}
    ${6} | ${[7, 1, 0]}          | ${'NO'}
    ${7} | ${[1, 1, 1, 1]}       | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToTransform(arr)).toBe(result);
  });
});
