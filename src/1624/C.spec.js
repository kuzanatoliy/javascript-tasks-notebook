const { isItPossibleToGetPermutation } = require('./C');

describe('1624A. Plus One on the Subset', () => {
  it.each`
    n    | array                          | result
    ${1} | ${[1, 8, 25, 2]}               | ${'YES'}
    ${2} | ${[1, 1]}                      | ${'NO'}
    ${3} | ${[9, 8, 3, 4, 2, 7, 1, 5, 6]} | ${'YES'}
    ${4} | ${[8, 2, 1]}                   | ${'NO'}
    ${5} | ${[24, 7, 16, 7]}              | ${'NO'}
    ${6} | ${[22, 6, 22, 4, 22]}          | ${'YES'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToGetPermutation(array)).toBe(result);
  });
});
