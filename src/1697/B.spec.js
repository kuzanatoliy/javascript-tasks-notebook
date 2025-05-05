const { getMaxDiscount } = require('./B');

describe('1697B. Promo', () => {
  it.each`
    n    | goods              | queries                     | result
    ${1} | ${[5, 3, 1, 5, 2]} | ${[[3, 2], [1, 1], [5, 3]]} | ${[8, 5, 6]}
  `('Base test: $n', ({ goods, queries, result }) => {
    expect(getMaxDiscount(goods, queries)).toStrictEqual(result);
  });
});
