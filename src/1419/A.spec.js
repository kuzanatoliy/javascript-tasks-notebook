const { getWinner } = require('./A');

describe('1419A. Digit Game', () => {
  it.each`
    n    | snum      | result
    ${1} | ${'2'}    | ${2}
    ${2} | ${'3'}    | ${1}
    ${3} | ${'102'}  | ${1}
    ${4} | ${'2069'} | ${2}
  `('Base test: $n', ({ snum, result }) => {
    expect(getWinner(snum)).toBe(result);
  });
});
