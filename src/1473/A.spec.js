const { isItPossibleToChangeArray } = require('./A');

describe('1473A. Replacing Elements', () => {
  it.each`
    n    | d    | array              | result
    ${1} | ${3} | ${[2, 3, 2, 5, 4]} | ${'NO'}
    ${2} | ${4} | ${[2, 4, 4]}       | ${'YES'}
    ${3} | ${4} | ${[2, 1, 5, 3, 6]} | ${'YES'}
  `('Base test: $n', ({ d, array, result }) => {
    expect(isItPossibleToChangeArray(d, array)).toBe(result);
  });
});
