const { getLength } = require('./B');

describe('2144B. Maximum Cost Permutation', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 0, 4, 0, 5]} | ${3}
    ${2} | ${[0, 0, 0]}       | ${3}
    ${3} | ${[1, 2, 3, 0]}    | ${0}
    ${4} | ${[0, 3, 2]}       | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getLength(arr)).toBe(result);
  });
});
