const { isItBattle } = require('./A');

describe('893A. Chess For Three', () => {
  it.each`
    n    | order        | result
    ${1} | ${[1, 1, 2]} | ${'YES'}
    ${2} | ${[1, 2]}    | ${'NO'}
  `('Base test: $n', ({ order, result }) => {
    expect(isItBattle(order)).toBe(result);
  });
});
