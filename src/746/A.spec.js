const { getMaxTotalCount } = require('./A');

describe('746A. Compote', () => {
  it.each`
    n    | a    | b    | c     | result
    ${1} | ${2} | ${5} | ${7}  | ${7}
    ${2} | ${4} | ${7} | ${13} | ${21}
    ${3} | ${2} | ${3} | ${2}  | ${0}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(getMaxTotalCount(a, b, c)).toBe(result);
  });
});
