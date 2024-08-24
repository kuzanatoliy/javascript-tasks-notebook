const { getWinner } = require('./A');

describe('119A. Epic Game', () => {
  it.each`
    n    | a    | b    | c      | result
    ${1} | ${3} | ${5} | ${9}   | ${0}
    ${2} | ${1} | ${1} | ${100} | ${1}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(getWinner(a, b, c)).toBe(result);
  });
});
