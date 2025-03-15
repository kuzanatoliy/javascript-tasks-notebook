const { getCountOfPossibleMoves } = require('./A');

describe('710A. King Moves', () => {
  it.each`
    n    | position | result
    ${1} | ${'e4'}  | ${8}
    ${2} | ${'h8'}  | ${3}
    ${3} | ${'e1'}  | ${5}
  `('Base test: $n', ({ position, result }) => {
    expect(getCountOfPossibleMoves(position)).toStrictEqual(result);
  });
});
