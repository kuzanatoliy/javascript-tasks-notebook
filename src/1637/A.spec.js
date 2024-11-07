const { isItPossibleNoSort } = require('./A');

describe('1637A. Sorting Parts', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[2, 2, 1]}       | ${'YES'}
    ${2} | ${[3, 1, 2, 1]}    | ${'YES'}
    ${3} | ${[1, 2, 2, 4, 4]} | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleNoSort(arr)).toBe(result);
  });
});
