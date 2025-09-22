const { getSpeed } = require('./B');

describe('412B. Network Configuration', () => {
  it.each`
    n    | arr                          | k    | result
    ${1} | ${[40, 20, 30]}              | ${2} | ${30}
    ${2} | ${[100, 20, 40, 20, 50, 50]} | ${4} | ${40}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getSpeed(arr, k)).toBe(result);
  });
});
