const { getCountOfMoves } = require('./A');

describe('1623A. Robot Cleaner', () => {
  it.each`
    n    | rows  | cols  | rb   | cb   | rd   | cd   | result
    ${1} | ${10} | ${10} | ${6} | ${1} | ${2} | ${8} | ${7}
    ${2} | ${10} | ${10} | ${9} | ${9} | ${1} | ${1} | ${10}
    ${3} | ${9}  | ${8}  | ${5} | ${6} | ${2} | ${1} | ${9}
    ${4} | ${6}  | ${9}  | ${2} | ${2} | ${5} | ${8} | ${3}
    ${5} | ${2}  | ${2}  | ${1} | ${1} | ${2} | ${1} | ${0}
  `('Base test: $n', ({ rows, cols, rb, cb, rd, cd, result }) => {
    expect(getCountOfMoves(rows, cols, rb, cb, rd, cd)).toBe(result);
  });
});
