const { getMinVal } = require('./A');

describe('1882A. Increasing Sequence', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 3, 2, 6, 7]} | ${8}
    ${2} | ${[2, 3, 4, 5]}    | ${4}
    ${3} | ${[1]}             | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinVal(arr)).toBe(result);
  });
});
