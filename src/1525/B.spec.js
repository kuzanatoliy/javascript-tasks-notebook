const { getCountOfOperations } = require('./B');

describe('1525B. Permutation Sort', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 3, 2, 4]}    | ${1}
    ${2} | ${[1, 2, 3]}       | ${0}
    ${3} | ${[2, 1, 4, 5, 3]} | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfOperations(arr)).toBe(result);
  });
});
