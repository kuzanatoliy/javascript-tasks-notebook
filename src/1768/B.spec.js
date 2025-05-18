const { getCountOfOperations } = require('./B');

describe('1768B. Quick Sort', () => {
  it.each`
    n    | arr             | k    | result
    ${1} | ${[1, 2, 3]}    | ${2} | ${0}
    ${2} | ${[3, 1, 2]}    | ${1} | ${1}
    ${3} | ${[1, 3, 2, 4]} | ${2} | ${1}
    ${4} | ${[2, 3, 1, 4]} | ${2} | ${2}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getCountOfOperations(arr, k)).toBe(result);
  });
});
