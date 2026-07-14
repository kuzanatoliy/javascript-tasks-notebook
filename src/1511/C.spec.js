const { getOrder } = require('./C');

describe('1511C. Yet Another Card Deck', () => {
  it.each`
    n    | cards                    | queries            | result
    ${1} | ${[2, 1, 1, 4, 3, 3, 1]} | ${[3, 2, 1, 1, 4]} | ${[5, 2, 3, 1, 5]}
  `('Base test: $n', ({ cards, queries, result }) => {
    expect(getOrder(cards, queries)).toStrictEqual(result);
  });
});
