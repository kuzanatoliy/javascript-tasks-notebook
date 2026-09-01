const { getRoundCount } = require('./A');

describe('2254A. Riptide', () => {
  it.each`
    n    | a    | b    | c     | result
    ${1} | ${1} | ${2} | ${3}  | ${1}
    ${2} | ${4} | ${6} | ${1}  | ${2}
    ${3} | ${3} | ${3} | ${7}  | ${0}
    ${4} | ${1} | ${7} | ${10} | ${3}
    ${5} | ${6} | ${1} | ${9}  | ${3}
    ${6} | ${1} | ${1} | ${1}  | ${0}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(getRoundCount(a, b, c)).toBe(result);
  });
});
