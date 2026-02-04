const { getMinRequiredPower } = require('./B');

describe('1811A. Musical Puzzle', () => {
  it.each`
    n    | num           | x1           | y1           | x2           | y2           | result
    ${1} | ${2}          | ${1}         | ${1}         | ${2}         | ${2}         | ${0}
    ${2} | ${4}          | ${1}         | ${4}         | ${3}         | ${3}         | ${1}
    ${3} | ${8}          | ${1}         | ${3}         | ${4}         | ${6}         | ${2}
    ${4} | ${100}        | ${10}        | ${20}        | ${50}        | ${100}       | ${9}
    ${5} | ${1000000000} | ${123456789} | ${987654321} | ${998244353} | ${500000004} | ${10590032}
  `('Base test: $n', ({ num, x1, y1, x2, y2, result }) => {
    expect(getMinRequiredPower(num, x1, y1, x2, y2)).toBe(result);
  });
});
