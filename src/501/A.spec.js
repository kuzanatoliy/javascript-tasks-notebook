const { getWinner } = require('./A');

describe('501A. Contest', () => {
  it.each`
    n    | a       | b       | c      | d      | result
    ${1} | ${500}  | ${1000} | ${20}  | ${30}  | ${'Vasya'}
    ${2} | ${1000} | ${1000} | ${1}   | ${1}   | ${'Tie'}
    ${3} | ${1500} | ${1000} | ${176} | ${177} | ${'Misha'}
  `('Base test: $n', ({ a, b, c, d, result }) => {
    expect(getWinner(a, b, c, d)).toBe(result);
  });
});
