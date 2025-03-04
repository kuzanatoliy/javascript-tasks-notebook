const { getCountOfWays } = require('./A');

describe('937A. Olympiad', () => {
  it.each`
    n    | arr               | result
    ${1} | ${[1, 3, 3, 2]}   | ${3}
    ${2} | ${[1, 1, 1]}      | ${1}
    ${3} | ${[42, 0, 0, 42]} | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfWays(arr)).toBe(result);
  });
});
