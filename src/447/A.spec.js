const { getFirstPosition } = require('./A');

describe('447A. DZY Loves Hash', () => {
  it.each`
    n    | arr                    | k    | result
    ${1} | ${[0, 21, 53, 41, 53]} | ${5} | ${4}
    ${2} | ${[[0, 1, 2, 3, 4]]}   | ${5} | ${-1}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getFirstPosition(arr, k)).toBe(result);
  });
});
