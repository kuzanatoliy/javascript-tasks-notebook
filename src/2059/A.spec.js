const { isItPossibleToTransform } = require('./A');

describe('2059A. Milya and Two AarrAarrAays', () => {
  it.each`
    n    | arrA                    | arrB                    | result
    ${1} | ${[1, 2, 1, 2]}         | ${[1, 2, 1, 2]}         | ${'YES'}
    ${2} | ${[1, 2, 3, 3, 2, 1]}   | ${[1, 1, 1, 1, 1, 1]}   | ${'YES'}
    ${3} | ${[1, 1, 1]}            | ${[1, 1, 1]}            | ${'NO'}
    ${2} | ${[1, 52, 52, 3, 1, 3]} | ${[59, 4, 3, 59, 3, 4]} | ${'YES'}
    ${3} | ${[100, 1, 100, 1]}     | ${[2, 2, 2, 2]}         | ${'NO'}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(isItPossibleToTransform(arrA, arrB)).toBe(result);
  });
});
