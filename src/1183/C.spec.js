const { getCountOfTurns } = require('./C');

describe('1183C. Computer Game', () => {
  it.each`
    n    | power | turns | a    | b    | result
    ${1} | ${15} | ${5}  | ${3} | ${2} | ${4}
    ${2} | ${15} | ${5}  | ${4} | ${3} | ${-1}
    ${3} | ${15} | ${5}  | ${2} | ${1} | ${5}
    ${4} | ${15} | ${5}  | ${5} | ${1} | ${2}
    ${5} | ${16} | ${7}  | ${5} | ${2} | ${0}
    ${6} | ${20} | ${5}  | ${7} | ${3} | ${1}
  `('Base test: $n', ({ power, turns, a, b, result }) => {
    expect(getCountOfTurns(power, turns, a, b)).toBe(result);
  });
});
