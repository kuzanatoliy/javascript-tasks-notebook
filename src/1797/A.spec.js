const { getCountOfCells } = require('./A');

describe('1797A. Li Hua and Maze', () => {
  it.each`
    n    | r    | c    | x1   | y1   | x2   | y2   | result
    ${1} | ${4} | ${4} | ${2} | ${2} | ${3} | ${3} | ${4}
    ${2} | ${6} | ${7} | ${1} | ${1} | ${2} | ${3} | ${2}
    ${3} | ${9} | ${9} | ${5} | ${1} | ${3} | ${6} | ${3}
  `('Base test: $n', ({ r, c, x1, y1, x2, y2, result }) => {
    expect(getCountOfCells(r, c, x1, y1, x2, y2)).toBe(result);
  });
});
