const { getMinScore } = require('./A');

describe('2160A. MEX Partition', () => {
  it.each`
    n    | arr          | result
    ${1} | ${[0, 0, 0]} | ${1}
    ${2} | ${[1, 2]}    | ${0}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinScore(arr)).toBe(result);
  });
});
