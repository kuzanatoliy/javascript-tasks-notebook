const { isItPossibleToReorder } = require('./A');

describe('1436A. Reorder', () => {
  it.each`
    n    | arr             | m    | result
    ${1} | ${[2, 5, 1]}    | ${8} | ${'YES'}
    ${2} | ${[0, 1, 2, 3]} | ${4} | ${'NO'}
  `('Base test: $n', ({ arr, m, result }) => {
    expect(isItPossibleToReorder(arr, m)).toBe(result);
  });
});
