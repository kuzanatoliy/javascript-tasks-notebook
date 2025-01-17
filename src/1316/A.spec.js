const { getMaxScore } = require('./A');

describe('1316A. Grade Allocation', () => {
  it.each`
    n    | arr             | m     | result
    ${1} | ${[1, 2, 3, 4]} | ${10} | ${10}
    ${2} | ${[1, 2, 3, 4]} | ${5}  | ${5}
  `('Base test: $n', ({ arr, m, result }) => {
    expect(getMaxScore(arr, m)).toBe(result);
  });
});
