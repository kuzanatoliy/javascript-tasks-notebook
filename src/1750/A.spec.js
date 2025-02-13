const { isItPossibleToSort } = require('./A');

describe('1750A. Indirect Sort', () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[1, 2, 3]}             | ${'YES'}
    ${2} | ${[1, 3, 2]}             | ${'YES'}
    ${3} | ${[5, 3, 4, 7, 6, 2, 1]} | ${'NO'}
    ${4} | ${[7, 6, 5, 4, 3, 2, 1]} | ${'NO'}
    ${5} | ${[2, 1, 4, 5, 3]}       | ${'NO'}
    ${6} | ${[2, 1, 3, 4, 5]}       | ${'NO'}
    ${7} | ${[1, 2, 6, 7, 4, 3, 5]} | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToSort(arr)).toBe(result);
  });
});
