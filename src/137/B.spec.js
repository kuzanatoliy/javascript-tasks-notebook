const { getCountOfChanges } = require('./B');

describe('137B. Permutation', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[3, 1, 2]}       | ${0}
    ${2} | ${[2, 2]}          | ${1}
    ${3} | ${[5, 3, 3, 3, 1]} | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfChanges(arr)).toStrictEqual(result);
  });
});
