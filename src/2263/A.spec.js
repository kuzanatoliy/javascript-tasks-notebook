const { getWinner } = require('./A');

describe('2263A. Min Max Game', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 0, 1, 0, 1]} | ${'Bessie'}
    ${2} | ${[0, 0, 1]}       | ${'Elsie'}
    ${3} | ${[1, 1, 0, 0]}    | ${'Bessie'}
  `('Base test: $n', ({ arr, result }) => {
    expect(getWinner(arr)).toBe(result);
  });
});
