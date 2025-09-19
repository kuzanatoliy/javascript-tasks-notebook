const { getCountOfDays } = require('./A');

describe('820A. Mister B and Book Reading', () => {
  it.each`
    n    | c     | v0   | v1     | a    | l    | result
    ${1} | ${5}  | ${5} | ${10}  | ${5} | ${4} | ${1}
    ${2} | ${12} | ${4} | ${12}  | ${4} | ${1} | ${3}
    ${3} | ${15} | ${1} | ${100} | ${0} | ${0} | ${15}
  `('Base test: $n', ({ c, v0, v1, a, l, result }) => {
    expect(getCountOfDays(c, v0, v1, a, l)).toBe(result);
  });
});
