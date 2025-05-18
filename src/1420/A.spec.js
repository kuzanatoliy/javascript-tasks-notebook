const { isItPossibleToSort } = require('./A');

describe('1420A. Cubes Sorting', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[5, 3, 2, 1, 4]}    | ${'YES'}
    ${2} | ${[2, 2, 2, 2, 2, 2]} | ${'YES'}
    ${3} | ${[2, 1]}             | ${'NO'}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(isItPossibleToSort(arr, k)).toBe(result);
  });
});
