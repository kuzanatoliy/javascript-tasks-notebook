const { isItPossibleToTransform } = require('./A');

describe("1975A. Bazoka and Mocha's Array", () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1, 1, 4, 5, 1, 4]} | ${'NO'}
    ${2} | ${[7, 9, 2, 2, 3]}    | ${'YES'}
    ${3} | ${[1, 2, 3]}          | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToTransform(arr)).toBe(result);
  });
});
