const { isItPossibleToTransformArray } = require('./A');

describe("1789A. Serval and Mocha's Array", () => {
  it.each`
    n    | array                              | result
    ${1} | ${[3, 6]}                          | ${'NO'}
    ${2} | ${[1, 2, 4]}                       | ${'YES'}
    ${3} | ${[3, 6, 1]}                       | ${'YES'}
    ${4} | ${[15, 35, 21]}                    | ${'NO'}
    ${5} | ${[35, 10, 35, 14]}                | ${'YES'}
    ${6} | ${[1261, 227821, 143, 4171, 1941]} | ${'YES'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToTransformArray(array)).toBe(result);
  });
});
