const { isItPossibleToWin } = require('./A');

describe('1033A. King Escape', () => {
  it.each`
    n    | a         | b         | c         | result
    ${1} | ${[4, 4]} | ${[1, 3]} | ${[3, 1]} | ${'YES'}
    ${2} | ${[4, 4]} | ${[2, 3]} | ${[1, 6]} | ${'NO'}
    ${3} | ${[3, 5]} | ${[1, 2]} | ${[6, 1]} | ${'NO'}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(isItPossibleToWin(a, b, c)).toBe(result);
  });
});
