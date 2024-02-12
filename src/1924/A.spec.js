const { isItPossibleTodistributeCoins } = require('./A');

describe('1924A. Collecting Coins', () => {
  it.each`
    n    | a      | b      | c      | coins        | result
    ${1} | ${5}   | ${3}   | ${2}   | ${8}         | ${'YES'}
    ${2} | ${100} | ${101} | ${102} | ${105}       | ${'YES'}
    ${3} | ${3}   | ${2}   | ${1}   | ${100000000} | ${'NO'}
    ${4} | ${10}  | ${20}  | ${15}  | ${14}        | ${'NO'}
    ${5} | ${101} | ${101} | ${101} | ${3}         | ${'YES'}
  `('Base test: $n', ({ a, b, c, coins, result }) => {
    expect(isItPossibleTodistributeCoins(a, b, c, coins)).toBe(result);
  });
});
