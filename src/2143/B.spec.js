const { getMinCost } = require('./B');

describe('2143B. Discounts', () => {
  it.each`
    n    | costs                      | discounts    | result
    ${1} | ${[18, 3, 7, 2, 9]}        | ${[3, 1, 1]} | ${10}
    ${2} | ${[1, 2, 6, 3, 3, 4]}      | ${[5]}       | ${17}
    ${3} | ${[1, 1]}                  | ${[2, 2, 2]} | ${1}
    ${4} | ${[10]}                    | ${[1]}       | ${0}
    ${3} | ${[99, 99, 999, 999, 123]} | ${[2, 1, 4]} | ${1197}
  `('Base test: $n', ({ costs, discounts, result }) => {
    expect(getMinCost(costs, discounts)).toBe(result);
  });
});
