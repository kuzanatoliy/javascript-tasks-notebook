const { isWinner } = require('./A');

describe('106A. Card Game', () => {
  it.each`
    n    | ts     | card1   | card2   | result
    ${1} | ${'H'} | ${'QH'} | ${'9S'} | ${'YES'}
    ${2} | ${'S'} | ${'8D'} | ${'6D'} | ${'YES'}
    ${3} | ${'C'} | ${'7H'} | ${'AS'} | ${'NO'}
  `('Base test: $n', ({ ts, card1, card2, result }) => {
    expect(isWinner(ts, card1, card2)).toBe(result);
  });
});
