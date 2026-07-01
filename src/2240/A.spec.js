const { getMaxPopcount } = require('./A');

describe('2240A. Another Popcount Problem', () => {
  it.each`
    n    | num        | k          | result
    ${1} | ${2}       | ${1}       | ${1}
    ${2} | ${3}       | ${1}       | ${2}
    ${3} | ${6}       | ${2}       | ${4}
    ${4} | ${14142}   | ${137205}  | ${14142}
    ${5} | ${1000000} | ${100}     | ${1322}
    ${6} | ${1000000} | ${1000000} | ${1000000}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getMaxPopcount(num, k)).toBe(result);
  });
});
