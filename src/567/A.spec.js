const { getMinMaxes } = require('./A');

describe('567A. Lineland Mail', () => {
  it.each`
    n    | arr               | result
    ${1} | ${[-5, -2, 2, 7]} | ${[[3, 12], [3, 9], [4, 7], [5, 12]]}
    ${2} | ${[-1, 1]}        | ${[[2, 2], [2, 2]]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinMaxes(arr)).toStrictEqual(result);
  });
});
