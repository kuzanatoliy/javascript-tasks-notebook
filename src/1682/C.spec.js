const { getMaxBeauty } = require('./C');

describe('1682C. LIS or Reverse LIS?', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[6, 6, 6]}          | ${1}
    ${2} | ${[2, 5, 4, 5, 2, 4]} | ${3}
    ${3} | ${[1, 3, 2, 2]}       | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxBeauty(arr)).toBe(result);
  });
});
