const { getCountOfDays } = require('./A');

describe('1140A. Detective Book', () => {
  it.each`
    n    | arr                            | result
    ${1} | ${[1, 3, 3, 6, 7, 6, 8, 8, 9]} | ${4}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfDays(arr)).toBe(result);
  });
});
