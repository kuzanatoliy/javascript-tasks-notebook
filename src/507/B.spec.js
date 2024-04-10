const { getCountOfMoves } = require('./B');

describe('507B. Amr and Pins', () => {
  it.each`
    n    | r    | x1   | y1   | x2   | y2   | result
    ${1} | ${2} | ${0} | ${0} | ${0} | ${4} | ${1}
    ${2} | ${1} | ${1} | ${1} | ${4} | ${4} | ${3}
    ${3} | ${4} | ${5} | ${6} | ${5} | ${6} | ${0}
  `('Base test: $n', ({ r, x1, y1, x2, y2, result }) => {
    expect(getCountOfMoves(r, x1, y1, x2, y2)).toBe(result);
  });
});
