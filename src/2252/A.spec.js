const { getMaxHealth } = require('./A');

describe('2252A. Boss Fight', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[100]}              | ${100}
    ${2} | ${[10, 5, 10, 10]}    | ${35}
    ${3} | ${[1, 2, 3, 4, 5]}    | ${15}
    ${4} | ${[7, 7, 7, 7, 7, 7]} | ${14}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxHealth(arr)).toBe(result);
  });
});
