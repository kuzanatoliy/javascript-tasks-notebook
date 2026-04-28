const { getCountOfBattles } = require('./E');

describe('1765E. Exchange', () => {
  it.each`
    n    | num        | a     | b     | result
    ${1} | ${100}     | ${25} | ${30} | ${4}
    ${2} | ${9999997} | ${25} | ${50} | ${400000}
    ${3} | ${52}      | ${50} | ${48} | ${1}
    ${4} | ${49}      | ${50} | ${1}  | ${1}
  `('Base test: $n', ({ num, a, b, result }) => {
    expect(getCountOfBattles(num, a, b)).toBe(result);
  });
});
