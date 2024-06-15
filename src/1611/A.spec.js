const { getCountOfMoves } = require('./A');

describe('1611A. Make Even', () => {
  it.each`
    n    | number  | result
    ${1} | ${3876} | ${0}
    ${2} | ${387}  | ${2}
    ${3} | ${4489} | ${1}
    ${4} | ${3}    | ${-1}
  `('Base test: $n', ({ number, result }) => {
    expect(getCountOfMoves(number)).toBe(result);
  });
});
