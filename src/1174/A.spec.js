const { reorderArray } = require('./A');

describe('1174A. Ehab Fails to Be Thanos', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1, 2, 2, 1, 3, 1]} | ${[1, 1, 1, 2, 2, 3]}
    ${2} | ${[1, 1]}             | ${[-1]}
  `('Base test: $n', ({ arr, result }) => {
    expect(reorderArray(arr)).toStrictEqual(result);
  });
});
