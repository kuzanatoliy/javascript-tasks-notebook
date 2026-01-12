const { getMinCost } = require('./C1');

describe('2132C1. The Cunning Seller (easy version)', () => {
  it.each`
    n    | num          | result
    ${1} | ${1}         | ${3}
    ${2} | ${3}         | ${10}
    ${3} | ${8}         | ${26}
    ${4} | ${2}         | ${6}
    ${5} | ${10}        | ${36}
    ${6} | ${20}        | ${72}
    ${7} | ${260010000} | ${2250964728}
  `('Base test: $n', ({ num, result }) => {
    expect(getMinCost(num)).toBe(result);
  });
});
