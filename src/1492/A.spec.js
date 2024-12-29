const { getDelay } = require('./A');

describe('1492A. Three swimmers', () => {
  it.each`
    n    | p     | a    | b     | c     | result
    ${1} | ${9}  | ${5} | ${4}  | ${8}  | ${1}
    ${2} | ${2}  | ${6} | ${10} | ${9}  | ${4}
    ${3} | ${10} | ${2} | ${5}  | ${10} | ${0}
    ${4} | ${10} | ${9} | ${9}  | ${9}  | ${8}
    ${5} | ${10} | ${5} | ${2}  | ${4}  | ${0}
  `('Base test: $n', ({ p, a, b, c, result }) => {
    expect(getDelay(p, a, b, c)).toBe(result);
  });
});
