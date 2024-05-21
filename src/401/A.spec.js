const { getCountOfCards } = require('./A');

describe('401A. Vanya and Cards', () => {
  it.each`
    n    | cards         | maxVal | result
    ${1} | ${[-1, 1, 2]} | ${2}   | ${1}
    ${2} | ${[-2, -2]}   | ${3}   | ${2}
  `('Base test: $n', ({ cards, maxVal, result }) => {
    expect(getCountOfCards(cards, maxVal)).toBe(result);
  });
});
