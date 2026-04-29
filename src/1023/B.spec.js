const { getCountOfPairs } = require('./B');

describe('1023B. Pair of Toys', () => {
  it.each`
    n    | num                | k                  | result
    ${1} | ${8}               | ${5}               | ${2}
    ${2} | ${8}               | ${15}              | ${1}
    ${3} | ${7}               | ${20}              | ${0}
    ${4} | ${1000000000000}   | ${1000000000001}   | ${500000000000}
    ${5} | ${1}               | ${1}               | ${0}
    ${6} | ${100000000000000} | ${100000000000000} | ${49999999999999}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getCountOfPairs(num, k)).toBe(result);
  });
});
