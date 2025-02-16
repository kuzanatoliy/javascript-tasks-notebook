const { getMaxValue } = require('./A');

describe('946A. Partition', () => {
  it.each`
    n    | arr                        | result
    ${1} | ${[1, -2, 0]}              | ${3}
    ${2} | ${[16, 23, 16, 15, 42, 8]} | ${120}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxValue(arr)).toBe(result);
  });
});
