const { getWinner } = require('./A');

describe('1841A. Game with Board', () => {
  it.each`
    n    | number | result
    ${1} | ${3}   | ${'Bob'}
    ${2} | ${6}   | ${'Alice'}
  `('Base test: $n', ({ number, result }) => {
    expect(getWinner(number)).toBe(result);
  });
});
