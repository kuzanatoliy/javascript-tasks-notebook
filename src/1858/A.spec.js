const { getWinner } = require('./A');

describe('1858A. Buttons', () => {
  it.each`
    n    | a    | b    | c    | result
    ${1} | ${1} | ${1} | ${1} | ${'First'}
    ${2} | ${9} | ${3} | ${3} | ${'First'}
    ${3} | ${1} | ${2} | ${3} | ${'Second'}
    ${4} | ${6} | ${6} | ${9} | ${'First'}
    ${5} | ${2} | ${2} | ${8} | ${'Second'}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(getWinner(a, b, c)).toBe(result);
  });
});
