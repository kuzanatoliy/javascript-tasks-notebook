const { getGoodSubarrCount } = require('./B');

describe('2226B. Everything Everywhere', () => {
  it.each`
    n    | arr                            | result
    ${1} | ${[1, 2]}                      | ${1}
    ${2} | ${[6, 1, 5, 9, 4, 7, 2, 8, 3]} | ${0}
    ${3} | ${[1, 2, 3, 4]}                | ${3}
  `('Base test: $n', ({ arr, result }) => {
    expect(getGoodSubarrCount(arr)).toBe(result);
  });
});
