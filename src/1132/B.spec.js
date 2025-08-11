const { getTotalCosts } = require('./B');

describe('1132B. coupons', () => {
  it.each`
    n    | costs                     | coupons   | result
    ${1} | ${[7, 1, 3, 1, 4, 10, 8]} | ${[3, 4]} | ${[27, 30]}
  `('Base test: $n', ({ costs, coupons, result }) => {
    expect(getTotalCosts(costs, coupons)).toStrictEqual(result);
  });
});
