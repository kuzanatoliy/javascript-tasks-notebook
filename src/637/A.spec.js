const { getWinner } = require('./A');

describe('635A. Voting for Photos', () => {
  it.each`
    n    | arr                                              | result
    ${1} | ${[1, 3, 2, 2, 1]}                               | ${2}
    ${2} | ${[100, 200, 300, 200, 100, 300, 300, 100, 200]} | ${300}
  `('Base test: $n', ({ arr, result }) => {
    expect(getWinner(arr)).toBe(result);
  });
});
