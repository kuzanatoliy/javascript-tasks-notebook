const { getCountOfMoves } = require('./A');

describe('1415A. Prison Break', () => {
  it.each`
    n    | rows  | cols  | r    | c    | result
    ${1} | ${10} | ${10} | ${1} | ${1} | ${18}
    ${2} | ${3}  | ${5}  | ${2} | ${4} | ${4}
    ${3} | ${10} | ${2}  | ${5} | ${1} | ${6}
  `('Base test: $n', ({ rows, cols, r, c, result }) => {
    expect(getCountOfMoves(rows, cols, r, c)).toBe(result);
  });
});
