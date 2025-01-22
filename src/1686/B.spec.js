const { getCountOfSubarrays } = require('./B');

describe('1688A. Everything Everywhere All But One', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1, 2, 3]}          | ${0}
    ${2} | ${[4, 3, 2, 1]}       | ${2}
    ${3} | ${[1, 2]}             | ${0}
    ${4} | ${[2, 1]}             | ${1}
    ${5} | ${[4, 5, 6, 1, 2, 3]} | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfSubarrays(arr)).toBe(result);
  });
});
