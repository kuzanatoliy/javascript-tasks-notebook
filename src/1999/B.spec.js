const { getCountOfWays } = require('./B');

describe('1999C. Showering', () => {
  it.each`
    n    | a1    | a2    | b1    | b2    | result
    ${1} | ${3}  | ${8}  | ${2}  | ${6}  | ${2}
    ${2} | ${1}  | ${1}  | ${1}  | ${1}  | ${0}
    ${3} | ${10} | ${10} | ${2}  | ${2}  | ${4}
    ${4} | ${1}  | ${1}  | ${10} | ${10} | ${0}
    ${5} | ${3}  | ${8}  | ${7}  | ${2}  | ${2}
  `('Base test: $n', ({ a1, a2, b1, b2, result }) => {
    expect(getCountOfWays(a1, a2, b1, b2)).toBe(result);
  });
});
