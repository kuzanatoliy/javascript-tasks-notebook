const { getJumpDistance } = require('./A');

describe('1649A. Game', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 1]}          | ${0}
    ${2} | ${[1, 0, 1, 0, 1]} | ${4}
    ${3} | ${[1, 0, 1, 1]}    | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getJumpDistance(arr)).toBe(result);
  });
});
