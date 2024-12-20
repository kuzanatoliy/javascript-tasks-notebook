const { isItPossibleToTransform } = require('./A');

describe('1746A. Maxmina', () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[0, 1, 0]}             | ${'YES'}
    ${2} | ${[1, 0, 1, 1, 0]}       | ${'YES'}
    ${3} | ${[1, 1]}                | ${'YES'}
    ${4} | ${[0, 0, 0, 0]}          | ${'NO'}
    ${5} | ${[0, 0, 1, 0, 0, 1]}    | ${'YES'}
    ${6} | ${[1, 1, 1, 1, 1, 1, 1]} | ${'YES'}
    ${7} | ${[0, 0, 1, 0, 0]}       | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToTransform(arr)).toBe(result);
  });
});
