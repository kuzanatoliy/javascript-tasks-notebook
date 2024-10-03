const { isItPossibleToSort } = require('./A');

describe('1896A. Jagged Swaps', () => {
  it.each`
    n    | array              | result
    ${1} | ${[1, 2, 3]}       | ${'YES'}
    ${2} | ${[1, 3, 2, 5, 4]} | ${'YES'}
    ${3} | ${[5, 4, 3, 2, 1]} | ${'NO'}
    ${4} | ${[3, 1, 2]}       | ${'NO'}
    ${5} | ${[2, 3, 1, 4]}    | ${'NO'}
    ${6} | ${[5, 1, 2, 3, 4]} | ${'NO'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToSort(array)).toBe(result);
  });
});
