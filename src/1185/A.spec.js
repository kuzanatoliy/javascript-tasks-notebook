const { getMinDuration } = require('./A');

describe('1185A. Ropewalkers', () => {
  it.each`
    n    | a    | b    | c     | d    | result
    ${1} | ${5} | ${2} | ${6}  | ${3} | ${2}
    ${2} | ${3} | ${1} | ${5}  | ${6} | ${8}
    ${3} | ${8} | ${3} | ${3}  | ${2} | ${2}
    ${4} | ${2} | ${3} | ${10} | ${4} | ${3}
  `('Base test: $n', ({ a, b, c, d, result }) => {
    expect(getMinDuration(a, b, c, d)).toBe(result);
  });
});
