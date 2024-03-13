const { getMinAmountOfMoney } = require('./A');

describe('1660A. Vasya and Coins', () => {
  it.each`
    n    | one     | two     | result
    ${1} | ${1}    | ${1}    | ${4}
    ${2} | ${4}    | ${0}    | ${5}
    ${3} | ${0}    | ${2}    | ${1}
    ${4} | ${0}    | ${0}    | ${1}
    ${5} | ${2314} | ${2374} | ${7063}
  `('Base test: $n', ({ one, two, result }) => {
    expect(getMinAmountOfMoney(one, two)).toBe(result);
  });
});
