const { getMaxSubArraySum } = require('./get-max-subarray-sum');

describe('getMaxSubArraySum', () => {
  it.each`
    n    | arr                                | result
    ${1} | ${[-2, 1, -3, 4, -1, 2, 1, -5, 4]} | ${6}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxSubArraySum(arr)).toBe(result);
  });
});
