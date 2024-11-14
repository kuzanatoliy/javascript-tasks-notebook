const { getTransformedArray } = require('./A');

describe('1006A. Adjacent Replacements', () => {
  it.each`
    n    | arr                                                                    | result
    ${1} | ${[1, 2, 4, 5, 10]}                                                    | ${[1, 1, 3, 5, 9]}
    ${2} | ${[10000, 10, 50605065, 1, 5, 89, 5, 999999999, 60506056, 1000000000]} | ${[9999, 9, 50605065, 1, 5, 89, 5, 999999999, 60506055, 999999999]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getTransformedArray(arr)).toStrictEqual(result);
  });
});
