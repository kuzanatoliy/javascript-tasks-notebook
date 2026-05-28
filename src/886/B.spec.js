const { getFirstLastCafe } = require('./B');

describe('886B. Vlad and Cafes', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1, 3, 2, 1, 2]}    | ${3}
    ${2} | ${[2, 1, 2, 2, 4, 1]} | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getFirstLastCafe(arr)).toBe(result);
  });
});
