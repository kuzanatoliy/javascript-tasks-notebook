const { isItPossibleToSort } = require('./B');

describe('2195B. Heapify 1', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 4, 3, 2, 5]} | ${'YES'}
    ${2} | ${[1, 4, 2, 3, 5]} | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToSort(arr)).toBe(result);
  });
});
