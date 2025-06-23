const { isItPossibleToTransformArray } = require('./B');

describe('2102B. The Picky Cat', () => {
  it.each`
    n    | arr                                               | result
    ${1} | ${[2, 3, 1]}                                      | ${'YES'}
    ${2} | ${[1, 2, 3, 4, 5]}                                | ${'YES'}
    ${3} | ${[4, 2, 0, -5]}                                  | ${'YES'}
    ${4} | ${[-5, 0, 4, 3]}                                  | ${'NO'}
    ${5} | ${[-10, 8, 3, 2]}                                 | ${'NO'}
    ${6} | ${[1]}                                            | ${'YES'}
    ${7} | ${[9, 1000, -999, -13, 456, -223, 23, 24, 10, 0]} | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToTransformArray(arr)).toBe(result);
  });
});
