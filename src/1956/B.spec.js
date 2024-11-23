const { getScore } = require('./B');

describe("1956A. Nene's Game", () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[1, 1, 2, 3]}             | ${1}
    ${2} | ${[7, 4, 1, 2, 8, 8, 5, 5]} | ${2}
    ${3} | ${[7, 1, 4, 5, 3, 4, 2, 6]} | ${1}
    ${4} | ${[1, 2, 3]}                | ${0}
    ${5} | ${[1]}                      | ${0}
  `('Base test: $n', ({ arr, result }) => {
    expect(getScore(arr)).toBe(result);
  });
});
