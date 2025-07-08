const { getCountOfOperations } = require('./B');

describe('1585B. Array Eversion', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[2, 4, 1, 5, 3]} | ${1}
    ${2} | ${[5, 3, 2, 4, 1]} | ${2}
    ${3} | ${[1, 1, 1, 1]}    | ${0}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfOperations(arr)).toBe(result);
  });
});
