const { restoreNumber } = require('./B');

describe('1916B. Two Divisors', () => {
  it.each`
    n    | x            | y            | result
    ${1} | ${2}         | ${3}         | ${6}
    ${2} | ${1}         | ${2}         | ${4}
    ${3} | ${3}         | ${11}        | ${33}
    ${4} | ${1}         | ${5}         | ${25}
    ${5} | ${5}         | ${10}        | ${20}
    ${6} | ${4}         | ${6}         | ${12}
    ${7} | ${3}         | ${9}         | ${27}
    ${8} | ${250000000} | ${500000000} | ${1000000000}
  `('Base test: $n', ({ x, y, result }) => {
    expect(restoreNumber(x, y)).toBe(result);
  });
});
