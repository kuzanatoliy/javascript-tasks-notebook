const { getCard } = require('./B');

describe('1681B. Card Trick', () => {
  it.each`
    n    | cards              | shakes             | result
    ${1} | ${[1, 2]}          | ${[1, 1, 1]}       | ${2}
    ${2} | ${[3, 1, 4, 2]}    | ${[3, 1]}          | ${3}
    ${3} | ${[2, 1, 5, 4, 3]} | ${[3, 2, 1, 2, 1]} | ${3}
  `('Base test: $n', ({ cards, shakes, result }) => {
    expect(getCard(cards, shakes)).toBe(result);
  });
});
