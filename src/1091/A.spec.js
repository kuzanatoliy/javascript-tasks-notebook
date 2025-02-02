const { getMaxCountOfOrnaments } = require('./A');

describe('1091A. New Year and the Christmas Ornament', () => {
  it.each`
    n    | y     | b     | r    | result
    ${1} | ${8}  | ${13} | ${9} | ${24}
    ${2} | ${13} | ${3}  | ${6} | ${9}
  `('Base test: $n', ({ y, b, r, result }) => {
    expect(getMaxCountOfOrnaments(y, b, r)).toBe(result);
  });
});
