const { getCountOfMoves } = require('./B');

describe('1721B. Deadly Laser', () => {
  it.each`
    n    | num  | m    | sx   | sy   | d    | result
    ${1} | ${2} | ${3} | ${1} | ${3} | ${0} | ${3}
    ${2} | ${2} | ${3} | ${1} | ${3} | ${1} | ${-1}
    ${3} | ${5} | ${5} | ${3} | ${4} | ${1} | ${8}
  `('Base test: $n', ({ num, m, sx, sy, d, result }) => {
    expect(getCountOfMoves(num, m, sx, sy, d)).toBe(result);
  });
});
