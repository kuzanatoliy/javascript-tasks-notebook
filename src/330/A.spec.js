const { getCountOfCells } = require('./A');

describe('330A. Cakeminator', () => {
  it.each`
    n    | map                         | result
    ${1} | ${['S...', '....', '..S.']} | ${8}
  `('Base test: $n', ({ map, result }) => {
    expect(getCountOfCells(map)).toBe(result);
  });
});
