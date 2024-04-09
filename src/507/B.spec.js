const { getCountOfMoves } = require('./A');

describe('492A. Vanya and Cubes', () => {
  it.each`
    n    | r    | x1   | y1   | x2   | y2   | result
    ${1} | ${2} | ${0} | ${0} | ${0} | ${4} | ${1}
    ${2} | ${1} | ${1} | ${1} | ${4} | ${4} | ${3}
    ${3} | ${4} | ${5} | ${6} | ${5} | ${6} | ${0}
  `('Base test: $n', ({ count, array, result }) => {
    expect(getCountOfMoves(count, array)).toBe(result);
  });
});
