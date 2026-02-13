const { getWinner } = require('./B');

describe('1694B. Circle Game', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[37]}         | ${'Mike'}
    ${2} | ${[100, 100]}   | ${'Joe'}
    ${3} | ${[1, 1, 1, 2]} | ${'Joe'}
  `('Base test: $n', ({ arr, result }) => {
    expect(getWinner(arr)).toBe(result);
  });
});
