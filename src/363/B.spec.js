const { getSumOfHighestPlanks } = require('./B');

describe('363B. Fence', () => {
  it.each`
    n    | arr                      | k    | result
    ${1} | ${[1, 2, 6, 1, 1, 7, 1]} | ${3} | ${3}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getSumOfHighestPlanks(arr, k)).toBe(result);
  });
});
