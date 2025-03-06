const { getMaxCost } = require('./A');

describe('1271A. Suits', () => {
  it.each`
    n    | a     | b     | c     | d     | e     | f     | result
    ${1} | ${4}  | ${5}  | ${6}  | ${3}  | ${1}  | ${2}  | ${6}
    ${2} | ${12} | ${11} | ${13} | ${20} | ${4}  | ${6}  | ${102}
    ${3} | ${17} | ${14} | ${5}  | ${21} | ${15} | ${17} | ${325}
  `('Base test: $n', ({ a, b, c, d, e, f, result }) => {
    expect(getMaxCost(a, b, c, d, e, f)).toBe(result);
  });
});
