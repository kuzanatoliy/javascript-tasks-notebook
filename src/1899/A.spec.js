const { getWinner } = require('./A');

describe('1899A. Game with Integers', () => {
  it.each`
    n    | number  | result
    ${1} | ${1}    | ${'First'}
    ${2} | ${3}    | ${'Second'}
    ${3} | ${5}    | ${'First'}
    ${4} | ${100}  | ${'First'}
    ${5} | ${999}  | ${'Second'}
    ${6} | ${1000} | ${'First'}
  `('Base test: $n', ({ number, result }) => {
    expect(getWinner(number)).toBe(result);
  });
});
