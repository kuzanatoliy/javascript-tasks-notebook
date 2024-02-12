const { getWinner } = require('./A');

describe('959A. Mahmoud and Ehab and the even-odd game', () => {
  it.each`
    n    | number | result
    ${1} | ${1}   | ${'Ehab'}
    ${2} | ${2}   | ${'Mahmoud'}
  `('Base test: $n', ({ number, count, result }) => {
    expect(getWinner(number, count)).toBe(result);
  });
});
