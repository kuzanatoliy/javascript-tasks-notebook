const { getCountOfApples } = require('./A');

describe('2153A. Circle of Apple Trees', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[2, 2, 2, 2]}       | ${1}
    ${2} | ${[1, 4, 5, 1, 2]}    | ${4}
    ${3} | ${[5, 4, 2, 1, 2, 3]} | ${5}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfApples(arr)).toBe(result);
  });
});
