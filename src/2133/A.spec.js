const { isItPossibleToTransformArray } = require('./A');

describe('2133A. Redstone?', () => {
  it.each`
    n    | arr                            | result
    ${1} | ${[5, 5]}                      | ${'YES'}
    ${2} | ${[6, 3, 6, 9]}                | ${'YES'}
    ${3} | ${[2, 3]}                      | ${'NO'}
    ${4} | ${[30, 10, 12, 10, 10, 9, 18]} | ${'YES'}
    ${5} | ${[2, 4, 8, 16, 32]}           | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToTransformArray(arr)).toBe(result);
  });
});
