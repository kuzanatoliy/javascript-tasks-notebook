const { getSubarrCount } = require('./C');

describe('2276C. Subarrays', () => {
  it.each`
    n    | k    | arr                            | result
    ${1} | ${2} | ${[2, 1, 3, 1, 4]}             | ${2}
    ${2} | ${3} | ${[1, 1, 1, 1, 1, 1, 1, 1, 1]} | ${5}
    ${3} | ${3} | ${[2, 8, 5, 7]}                | ${0}
  `('Base test: $n', ({ k, arr, result }) => {
    expect(getSubarrCount(k, arr)).toBe(result);
  });
});
