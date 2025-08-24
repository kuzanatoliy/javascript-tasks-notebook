const { getCountOfPairs } = require('./A');

describe("586A. Alena's Schedule", () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[0, 1, 0, 1, 1]}       | ${4}
    ${2} | ${[1, 0, 1, 0, 0, 1, 0]} | ${4}
    ${3} | ${[0]}                   | ${0}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfPairs(arr)).toBe(result);
  });
});
