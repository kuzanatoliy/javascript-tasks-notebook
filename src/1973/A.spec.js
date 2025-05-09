const { getCountOfDraws } = require('./A');

describe('1973A. Chess For Three', () => {
  it.each`
    n    | p1   | p2   | p3    | result
    ${1} | ${0} | ${0} | ${0}  | ${0}
    ${2} | ${0} | ${1} | ${1}  | ${1}
    ${3} | ${1} | ${1} | ${1}  | ${-1}
    ${4} | ${1} | ${1} | ${2}  | ${2}
    ${5} | ${3} | ${3} | ${3}  | ${-1}
    ${6} | ${3} | ${4} | ${5}  | ${6}
    ${7} | ${1} | ${1} | ${10} | ${2}
  `('Base test: $n', ({ p1, p2, p3, result }) => {
    expect(getCountOfDraws(p1, p2, p3)).toBe(result);
  });
});
