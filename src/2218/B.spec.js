const { getMaxSum } = require('./B');

describe('2218B. The 67th 6-7 Integer Problem', () => {
  it.each`
    n    | arr                             | result
    ${1} | ${[41, 41, 41, 41, 41, 41, 41]} | ${-205}
    ${2} | ${[6, 9, 4, 20, 6, 7, 67]}      | ${15}
    ${3} | ${[1, 2, 3, 4, 5, 6, 7]}        | ${-14}
    ${4} | ${[6, 7, 6, 7, 6, 7, 6]}        | ${-31}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxSum(arr)).toBe(result);
  });
});
