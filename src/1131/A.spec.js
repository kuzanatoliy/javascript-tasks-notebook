const { getCountOfCells } = require('./A');

describe('1131A. Sea Battle', () => {
  it.each`
    n    | w1   | h1   | w2   | h2   | result
    ${1} | ${2} | ${1} | ${2} | ${1} | ${12}
    ${2} | ${2} | ${2} | ${1} | ${2} | ${16}
  `('Base test: $n', ({ w1, h1, w2, h2, result }) => {
    expect(getCountOfCells(w1, h1, w2, h2)).toBe(result);
  });
});
