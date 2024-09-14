const { getWinner } = require('./A');

describe('1719A. Chip Game', () => {
  it.each`
    n    | a            | b             | result
    ${1} | ${1}         | ${1}          | ${'Tonya'}
    ${2} | ${1}         | ${4}          | ${'Burenka'}
    ${3} | ${5}         | ${6}          | ${'Burenka'}
    ${4} | ${2}         | ${2}          | ${'Tonya'}
    ${5} | ${6}         | ${3}          | ${'Burenka'}
    ${6} | ${999999999} | ${1000000000} | ${'Burenka'}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getWinner(a, b)).toBe(result);
  });
});
