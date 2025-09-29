const { getLastChild } = require('./A');

describe('450A. Jzzhu and Children', () => {
  it.each`
    n    | arr                   | k    | result
    ${1} | ${[1, 3, 1, 4, 2]}    | ${2} | ${4}
    ${2} | ${[1, 1, 2, 2, 3, 3]} | ${4} | ${6}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getLastChild(arr, k)).toBe(result);
  });
});
