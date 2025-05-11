const { isItPossibleToTransform } = require('./A');

describe('1486A. Shifting Stacks', () => {
  it.each`
    n    | arr                                                 | result
    ${1} | ${[1, 2]}                                           | ${'YES'}
    ${2} | ${[1, 0]}                                           | ${'YES'}
    ${3} | ${[4, 4, 4]}                                        | ${'YES'}
    ${4} | ${[0, 0]}                                           | ${'NO'}
    ${5} | ${[0, 1, 0]}                                        | ${'NO'}
    ${6} | ${[1000000000, 1000000000, 1000000000, 1000000000]} | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToTransform(arr)).toBe(result);
  });
});
