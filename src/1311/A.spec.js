const { getCountOfMoves } = require('./A');

describe('1311A. Add Odd or Subtract Even', () => {
  it.each`
    n    | a     | b     | result
    ${1} | ${2}  | ${3}  | ${1}
    ${2} | ${10} | ${10} | ${0}
    ${3} | ${2}  | ${4}  | ${2}
    ${4} | ${7}  | ${4}  | ${2}
    ${5} | ${9}  | ${3}  | ${1}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getCountOfMoves(a, b)).toBe(result);
  });
});
