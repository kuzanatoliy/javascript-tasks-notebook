const { restoreArr } = require('./B');

describe('2160A. MEX Partition', () => {
  it.each`
    n    | nums                | result
    ${1} | ${[1n, 3n, 6n]}     | ${[1n, 2n, 3n]}
    ${2} | ${[1n, 3n, 5n]}     | ${[1n, 2n, 1n]}
    ${3} | ${[1n, 3n, 4n]}     | ${[1n, 2n, 2n]}
    ${4} | ${[1n, 2n, 3n, 7n]} | ${[1n, 1n, 1n, 2n]}
  `('Base test: $n', ({ nums, result }) => {
    expect(restoreArr(nums)).toStrictEqual(result);
  });
});
