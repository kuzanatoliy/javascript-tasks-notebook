const { getKthNumber } = require('./B');

describe('1594A. Consecutive Sum Riddle', () => {
  it.each`
    n    | num    | k      | result
    ${1} | ${3}   | ${4}   | ${9}
    ${2} | ${2}   | ${12}  | ${12}
    ${3} | ${105} | ${564} | ${3595374}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getKthNumber(num, k)).toBe(result);
  });
});
