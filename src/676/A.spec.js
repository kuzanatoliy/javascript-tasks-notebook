const { getMaxDistance } = require('./A');

describe('676A. Nicholas and Permutation', () => {
  it.each`
    n    | permutation              | result
    ${1} | ${[4, 5, 1, 3, 2]}       | ${3}
    ${2} | ${[1, 6, 5, 3, 4, 7, 2]} | ${6}
    ${3} | ${[6, 5, 4, 3, 2, 1]}    | ${5}
  `('Base test: $n', ({ permutation, result }) => {
    expect(getMaxDistance(permutation)).toBe(result);
  });
});
