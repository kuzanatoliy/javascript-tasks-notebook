const { isItPossibleToColor } = require('./A');

describe('2191A. Array Coloring', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[2, 3, 4, 1]}    | ${'YES'}
    ${2} | ${[2, 3, 1]}       | ${'NO'}
    ${3} | ${[3, 4, 1, 2, 5]} | ${'YES'}
    ${4} | ${[3, 1, 4, 2, 5]} | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToColor(arr)).toBe(result);
  });
});
