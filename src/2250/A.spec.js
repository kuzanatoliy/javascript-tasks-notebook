const { isItPossibleToTransform } = require('./A');

describe('2250A. Threshold Movement', () => {
  it.each`
    n    | arr                            | result
    ${1} | ${[7]}                         | ${'NO'}
    ${2} | ${[3, 1]}                      | ${'YES'}
    ${3} | ${[2, 1]}                      | ${'NO'}
    ${4} | ${[9, 1, 7, 2]}                | ${'YES'}
    ${5} | ${[9, 8, 7, 1]}                | ${'NO'}
    ${6} | ${[1000000000, 1, 9, 2, 8, 3]} | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToTransform(arr)).toBe(result);
  });
});
