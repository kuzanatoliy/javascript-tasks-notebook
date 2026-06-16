const { getCupIndex } = require('./A');

describe('35A. Shell Game', () => {
  it.each`
    n    | ind  | p1        | p2        | p3        | result
    ${1} | ${1} | ${[1, 2]} | ${[2, 1]} | ${[2, 1]} | ${2}
    ${2} | ${1} | ${[2, 1]} | ${[3, 1]} | ${[1, 3]} | ${2}
  `('Base test: $n', ({ ind, p1, p2, p3, result }) => {
    expect(getCupIndex(ind, p1, p2, p3)).toBe(result);
  });
});
