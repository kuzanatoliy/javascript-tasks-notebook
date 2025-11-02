const { getCountOfOperations } = require('./A');

describe('2152A. Increase or Smash', () => {
  it.each`
    n    | arr                            | result
    ${1} | ${[1, 1, 3]}                   | ${3}
    ${2} | ${[100]}                       | ${1}
    ${3} | ${[9, 9, 3, 2, 4, 4, 8, 5, 3]} | ${11}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfOperations(arr)).toBe(result);
  });
});
