const { getOperationsCounts } = require('./A3');

describe('178A3. Educational Game', () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[1, 0, 1, 2]}             | ${[1, 1, 3]}
    ${2} | ${[1, 2, 3, 4, 5, 6, 7, 8]} | ${[1, 3, 6, 10, 16, 24, 40]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getOperationsCounts(arr)).toStrictEqual(result);
  });
});
