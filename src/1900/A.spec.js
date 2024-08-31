const { getCountOfMoves } = require('./A');

describe('1900A. Cover in Water', () => {
  it.each`
    n    | origin          | result
    ${1} | ${'...'}        | ${2}
    ${2} | ${'##....#'}    | ${2}
    ${3} | ${'..#.#..'}    | ${5}
    ${4} | ${'####'}       | ${0}
    ${5} | ${'#...#..#.#'} | ${2}
  `('Base test: $n', ({ origin, result }) => {
    expect(getCountOfMoves(origin)).toBe(result);
  });
});
