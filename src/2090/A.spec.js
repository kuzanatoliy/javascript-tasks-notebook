const { isLittleKWinner } = require('./A');

describe('2090A. Treasure Hunt', () => {
  it.each`
    n    | x    | y    | a    | result
    ${1} | ${1} | ${2} | ${4} | ${'YES'}
    ${2} | ${2} | ${1} | ${4} | ${'NO'}
    ${3} | ${2} | ${2} | ${1} | ${'NO'}
  `('Base test: $n', ({ x, y, a, result }) => {
    expect(isLittleKWinner(x, y, a)).toBe(result);
  });
});
