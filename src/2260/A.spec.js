const { getOperationsCount } = require('./A');

describe("2260A. Monocarp's Contest", () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[0, 0]}             | ${0}
    ${2} | ${[0, 1]}             | ${-1}
    ${3} | ${[1, 0, 0, 1, 0, 0]} | ${1}
    ${4} | ${[1, 0, 0, 1, 1]}    | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getOperationsCount(arr)).toBe(result);
  });
});
