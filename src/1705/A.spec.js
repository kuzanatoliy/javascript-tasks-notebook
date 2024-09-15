const { isItPossibleToSort } = require('./A');

describe('1705A. Mark the Photographer', () => {
  it.each`
    n    | arr                      | h    | result
    ${1} | ${[1, 3, 9, 10, 12, 16]} | ${6} | ${'YES'}
    ${2} | ${[2, 5, 2, 2, 2, 5]}    | ${1} | ${'NO'}
    ${3} | ${[8, 6]}                | ${2} | ${'YES'}
  `('Base test: $n', ({ arr, h, result }) => {
    expect(isItPossibleToSort(arr, h)).toBe(result);
  });
});
