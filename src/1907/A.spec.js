const { getPossibleMoves } = require('./A');

describe('1907A. Rook', () => {
  it.each`
    n    | data    | result
    ${1} | ${'d5'} | ${['a5', 'b5', 'c5', 'e5', 'f5', 'g5', 'h5', 'd1', 'd2', 'd3', 'd4', 'd6', 'd7', 'd8']}
  `('Base test: $n', ({ data, result }) => {
    expect(getPossibleMoves(data)).toStrictEqual(result);
  });
});
