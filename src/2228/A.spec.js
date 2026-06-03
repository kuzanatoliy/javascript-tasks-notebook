const { getMaxOperationCount } = require('./A');

describe("2228A. Marisa Steals Reimu's Takeout", () => {
  it.each`
    n    | arr                | result
    ${1} | ${[0, 0, 0, 0]}    | ${4}
    ${2} | ${[1, 2, 0]}       | ${2}
    ${3} | ${[1, 2, 1, 2, 1]} | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxOperationCount(arr)).toBe(result);
  });
});
