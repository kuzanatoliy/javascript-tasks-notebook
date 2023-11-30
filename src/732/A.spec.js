const { getCountOfShovels } = require('./A');

describe('732A. Buy a Shovel', () => {
  it.each`
    n    | price  | coin | result
    ${1} | ${117} | ${3} | ${9}
    ${2} | ${237} | ${7} | ${1}
    ${3} | ${15}  | ${2} | ${2}
  `('Base test: $n', ({ price, coin, result }) => {
    expect(getCountOfShovels(price, coin)).toBe(result);
  });
});
