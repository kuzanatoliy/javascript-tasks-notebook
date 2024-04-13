const { getCountOfPositions } = require('./A');

describe('1285A. Divisibility Problem', () => {
  it.each`
    n    | string    | result
    ${1} | ${'LRLR'} | ${5}
  `('Base test: $n', ({ string, result }) => {
    expect(getCountOfPositions(string)).toBe(result);
  });
});
