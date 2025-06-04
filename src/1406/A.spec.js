const { getMaxMexSum } = require('./A');

describe('1406A. Subset Mex', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[0, 2, 1, 5, 0, 1]} | ${5}
    ${2} | ${[0, 1, 2]}          | ${3}
    ${3} | ${[0, 2, 0, 1]}       | ${4}
    ${4} | ${[1, 2, 3, 4, 5, 6]} | ${0}
    ${5} | ${[0, 0, 0]}          | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxMexSum(arr)).toBe(result);
  });
});
