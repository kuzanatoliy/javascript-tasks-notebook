const { checkBananasCount } = require('./A');

describe('546A. Soldier and Bananas', () => {
  it.each`
    n    | price | money | count | result
    ${1} | ${3}  | ${17} | ${4}  | ${13}
  `('Base test: $n', ({ price, money, count, result }) => {
    expect(checkBananasCount(price, money, count)).toBe(result);
  });

  it.each`
    n    | price | money | count | result
    ${1} | ${1}  | ${2}  | ${1}  | ${0}
  `('Special test: $n', ({ price, money, count, result }) => {
    expect(checkBananasCount(price, money, count)).toBe(result);
  });
});
