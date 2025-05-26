const { getNextCity } = require('./A');

describe('205A. Little Elephant and Rozdil', () => {
  it.each`
    n    | arr                          | result
    ${1} | ${[7, 4]}                    | ${2}
    ${2} | ${[7, 4, 47, 100, 4, 9, 12]} | ${'Still Rozdil'}
  `('Base test: $n', ({ arr, result }) => {
    expect(getNextCity(arr)).toBe(result);
  });
});
