const { getAmount } = require('./A');

describe('1955A. Yogurt Sale', () => {
  it.each`
    n    | count | price | bundlePrice | result
    ${1} | ${2}  | ${5}  | ${9}        | ${9}
    ${2} | ${3}  | ${5}  | ${9}        | ${14}
    ${3} | ${3}  | ${5}  | ${11}       | ${15}
    ${4} | ${4}  | ${5}  | ${11}       | ${20}
  `('Base test: $n', ({ count, price, bundlePrice, result }) => {
    expect(getAmount(count, price, bundlePrice)).toBe(result);
  });
});
