const { getSide } = require('./A');

describe('1422A. Fence', () => {
  it.each`
    n    | a     | b     | c     | result
    ${1} | ${1}  | ${2}  | ${3}  | ${5}
    ${2} | ${12} | ${34} | ${56} | ${101}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(getSide(a, b, c)).toBe(result);
  });
});
