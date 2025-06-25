const { getCountOfMoves } = require('./A');

describe('1668A. Direction Change', () => {
  it.each`
    n    | row   | col  | result
    ${1} | ${1}  | ${1} | ${0}
    ${2} | ${2}  | ${1} | ${1}
    ${3} | ${1}  | ${3} | ${-1}
    ${4} | ${4}  | ${2} | ${6}
    ${5} | ${4}  | ${6} | ${10}
    ${6} | ${10} | ${5} | ${17}
  `('Base test: $n', ({ row, col, result }) => {
    expect(getCountOfMoves(row, col)).toBe(result);
  });
});
